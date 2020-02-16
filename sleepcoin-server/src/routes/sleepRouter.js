require("dotenv").config();
const express = require("express");
const Sleep = require("../models/sleep");
const router = express.Router();
const passport = require("passport");
const { LOOM_PRIVATE_KEY } = process.env;
const MyCoinJSON = require("../contracts/MyCoin.json");
const {
  CryptoUtils,
  LocalAddress,
  Client,
  NonceTxMiddleware,
  SignedTxMiddleware,
  Contracts,
  OfflineWeb3Signer,
  Address,
  LoomProvider
} = require("loom-js");
const Web3 = require("web3");

router.get("/", (req, res) => {
  res.status(200);
  res.send("Sleep API");
});

router.get(
  "/getSleep",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    let today = false;
    let d = new Date();
    const nights = await Sleep.find({
      userId: req.user._id
    }).lean();

    for (let i = 0; i < nights.length; i++) {
      if (d.getDate() == nights[0].date.getDate()) {
        today = true;
      }
    }

    if (!today) {
      nights.push({
        date: d,
        data: null,
        userId: req.user._id
      });
    }

    return res.status(200).json(nights);
  }
);

router.post(
  "/newSleep",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const newData = JSON.parse(req.body.data);
    const RATIO = 1;
    const payout = RATIO * newData.length;

    const privateKey = CryptoUtils.B64ToUint8Array(LOOM_PRIVATE_KEY);
    const publicKey = CryptoUtils.publicKeyFromPrivateKey(privateKey);

    let client = new Client(
      "extdev-plasma-us1",
      "wss://extdev-plasma-us1.dappchains.com/websocket",
      "wss://extdev-plasma-us1.dappchains.com/queryws"
    );

    client.txMiddleware = [
      new NonceTxMiddleware(publicKey, client),
      new SignedTxMiddleware(privateKey)
    ];

    let web3 = new Web3(new LoomProvider(client, privateKey));
    const extdevNetworkId = await web3.eth.net.getId();
    const contract = await new web3.eth.Contract(
      MyCoinJSON.abi,
      MyCoinJSON.networks[extdevNetworkId].address
    );

    await contract.methods.transfer(req.user.address, String(payout)).send({
      from: LocalAddress.fromPublicKey(publicKey).toString()
    });

    const newSleep = new Sleep({
      userId: req.user._id,
      data: req.body.data,
      date: req.body.date,
      balance: payout
    });
    await newSleep.save();

    return res.status(201).json({
      success: true
    });
  }
);

module.exports = router;
