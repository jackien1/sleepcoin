require("dotenv").config();
const express = require("express");
const router = express.Router();
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
const User = require("../models/user");
const passport = require("passport");
const MyCoinJSON = require("../contracts/MyCoin.json");
const ShopJSON = require("../contracts/Shop.json");
const OfferJSON = require("../contracts/Offer.json");
const { INFURA_API_KEY } = process.env;

router.get("/", (req, res) => {
  res.status(200);
  res.send("Shop API");
});

router.post(
  "/request",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const user = await User.findOne({ email: req.user.email }).lean();

    const privateKey = new Uint8Array(JSON.parse("[" + user.privateKey + "]"));
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
      ShopJSON.abi,
      ShopJSON.networks[extdevNetworkId].address
    );

    await contract.methods
      .createRequest(
        req.body.title,
        req.body.description,
        req.body.quantity,
        req.body.price
      )
      .send({
        from: LocalAddress.fromPublicKey(publicKey).toString()
      });

    res.status(201).json({
      success: true
    });
  }
);

router.get(
  "/getCampaigns",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const user = await User.findOne({ email: req.user.email }).lean();

    const privateKey = new Uint8Array(JSON.parse("[" + user.privateKey + "]"));
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
      ShopJSON.abi,
      ShopJSON.networks[extdevNetworkId].address
    );

    const offers = await contract.methods.returnOffers().call({
      from: user.address
    });

    const search = offers.map(async offer => {
      const searchContract = await new web3.eth.Contract(OfferJSON.abi, offer);
      const meta = await searchContract.methods.getDetails().call({
        from: user.address
      });
      return { offer, meta };
    });

    const resultedResults = await Promise.all(search);
    const filteredResults = [];

    for (let i = 0; i < resultedResults.length; i++) {
      if (
        resultedResults[i].meta["4"].toLowerCase() == user.address.toLowerCase()
      )
        filteredResults.push(resultedResults[i]);
    }
    res.status(200).json(filteredResults);
  }
);

module.exports = router;
