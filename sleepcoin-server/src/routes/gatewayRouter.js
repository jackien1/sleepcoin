require("dotenv").config();
const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const User = require("../models/user");
const passport = require("passport");
const Gateway = require("../Gateway.json");
const { INFURA_API_KEY } = process.env;

router.get("/", (req, res) => {
  res.status(200);
  res.send("Gateway API");
});

router.post(
  "/addBalance",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const web3 = new Web3(`https://rinkeby.infura.io/v3/${INFURA_API_KEY}`);
      const networkId = await web3.eth.net.getId();

      const contract = new web3.eth.Contract(
        Gateway.abi,
        "0x9c67fD4eAF0497f9820A3FBf782f81D6b6dC4Baa"
      );

      const user = await User.findOne({ email: req.user.email });

      const signedTx = await web3.eth.accounts.signTransaction(
        {
          from: user.ethAddress,
          gasPrice: web3.utils.toHex(web3.utils.toWei("0.00001", "ether")),
          gas: web3.utils.toHex("40000"),
          to: contract.options.address,
          value: web3.utils.toHex(req.body.value),
          chainId: 4
        },
        user.ethPrivateKey
      );

      await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      return res.status(201).json({ success: true });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e.message });
    }
  }
);

module.exports = router;
