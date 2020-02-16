require("dotenv").config();
const express = require("express");
const router = express.Router();
const passport = require("passport");
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
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const User = require("../models/user");
const Sleep = require("../models/sleep");
const MyCoinJSON = require("../contracts/MyCoin.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { INFURA_API_KEY, SECRET, TIME } = process.env;

router.get("/", (req, res) => {
  res.status(200);
  res.send("Authentication API");
});

router.post("/register", async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({
      email: "User already exists"
    });
  }

  const web3 = new Web3(`https://rinkeby.infura.io/v3/${INFURA_API_KEY}`);
  const account = web3.eth.accounts.wallet.create(1, SECRET);
  const ethPrivateKey = account["0"].privateKey;
  const ethAddress = account["0"].address;
  const ownerAccount = web3.eth.accounts.privateKeyToAccount(ethPrivateKey);
  web3.eth.accounts.wallet.add(ownerAccount);

  const privateKey = CryptoUtils.generatePrivateKey();
  const publicKey = CryptoUtils.publicKeyFromPrivateKey(privateKey);
  const address = LocalAddress.fromPublicKey(publicKey).toString();

  let client = new Client(
    "extdev-plasma-us1",
    "wss://extdev-plasma-us1.dappchains.com/websocket",
    "wss://extdev-plasma-us1.dappchains.com/queryws"
  );

  client.txMiddleware = [
    new NonceTxMiddleware(publicKey, client),
    new SignedTxMiddleware(privateKey)
  ];

  const ethAccount = new Address("eth", LocalAddress.fromHexString(ethAddress));
  const dappAccount = new Address(
    client.chainId,
    LocalAddress.fromPublicKey(publicKey)
  );

  const addressMapper = await Contracts.AddressMapper.createAsync(
    client,
    dappAccount
  );

  const signer = new OfflineWeb3Signer(web3, ownerAccount);
  await addressMapper.addIdentityMappingAsync(dappAccount, ethAccount, signer);

  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    userName: req.body.userName,
    age: req.body.age,
    address,
    privateKey,
    ethAddress,
    ethPrivateKey
  });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newUser.password, salt);

  newUser.password = hash;
  await newUser.save();

  const payload = {
    id: newUser.id,
    email: newUser.email,
    userName: newUser.userName,
    age: newUser.age,
    date: newUser.date,
    address: newUser.address,
    ethAddress: newUser.ethAddress
  };

  const token = await jwt.sign(payload, SECRET, {
    expiresIn: TIME
  });

  return res.status(201).json({
    success: true,
    token: `Bearer ${token}`
  });
});

router.post("/registerAdvertiser", async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({
      email: "User already exists"
    });
  }

  const web3 = new Web3(`https://rinkeby.infura.io/v3/${INFURA_API_KEY}`);
  const account = web3.eth.accounts.wallet.create(1, SECRET);
  const ethPrivateKey = account["0"].privateKey;
  const ethAddress = account["0"].address;
  const ownerAccount = web3.eth.accounts.privateKeyToAccount(ethPrivateKey);
  web3.eth.accounts.wallet.add(ownerAccount);

  const privateKey = CryptoUtils.generatePrivateKey();
  const publicKey = CryptoUtils.publicKeyFromPrivateKey(privateKey);
  const address = LocalAddress.fromPublicKey(publicKey).toString();

  let client = new Client(
    "extdev-plasma-us1",
    "wss://extdev-plasma-us1.dappchains.com/websocket",
    "wss://extdev-plasma-us1.dappchains.com/queryws"
  );

  client.txMiddleware = [
    new NonceTxMiddleware(publicKey, client),
    new SignedTxMiddleware(privateKey)
  ];

  const ethAccount = new Address("eth", LocalAddress.fromHexString(ethAddress));
  const dappAccount = new Address(
    client.chainId,
    LocalAddress.fromPublicKey(publicKey)
  );

  const addressMapper = await Contracts.AddressMapper.createAsync(
    client,
    dappAccount
  );

  const signer = new OfflineWeb3Signer(web3, ownerAccount);
  await addressMapper.addIdentityMappingAsync(dappAccount, ethAccount, signer);

  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    address,
    privateKey,
    ethAddress,
    ethPrivateKey
  });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newUser.password, salt);

  newUser.password = hash;
  await newUser.save();

  const payload = {
    id: newUser.id,
    email: newUser.email,
    userName: newUser.userName,
    age: newUser.age,
    date: newUser.date,
    address: newUser.address,
    ethAddress: newUser.ethAddress
  };

  const token = await jwt.sign(payload, SECRET, {
    expiresIn: TIME
  });

  return res.status(201).json({
    success: true,
    token: `Bearer ${token}`
  });
});

router.post("/login", async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({
      email: "User not found"
    });
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (isMatch) {
    const payload = {
      id: user.id,
      email: user.email,
      userName: user.userName,
      age: user.age,
      date: user.date,
      address: user.address,
      ethAddress: user.ethAddress
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: TIME });
    return res.json({ success: true, token: `Bearer ${token}` });
  } else {
    return res.status(400).json({
      password: "Incorrect Password"
    });
  }
});

router.post("/loginAdvertiser", async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({
      email: "User not found"
    });
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (isMatch) {
    const payload = {
      id: user.id,
      email: user.email,
      date: user.date,
      address: user.address,
      ethAddress: user.ethAddress
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: TIME });
    return res.json({ success: true, token: `Bearer ${token}` });
  } else {
    return res.status(400).json({
      password: "Incorrect Password"
    });
  }
});

router.get(
  "/getUser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const user = await User.findOne({ email: req.user.email }).lean();
    const nights = await Sleep.find({ userId: req.user._id }).lean();

    let sleepData = [];
    let coinData = [];

    for (let i = 0; i < nights.length; i++) {
      let newData = JSON.parse(nights[i].data);
      sleepData.push(newData.length / 3600);
      coinData.push(nights[i].balance);
    }

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
      MyCoinJSON.abi,
      MyCoinJSON.networks[extdevNetworkId].address
    );

    const balance = await contract.methods
      .balanceOf(LocalAddress.fromPublicKey(publicKey).toString())
      .call({ from: LocalAddress.fromPublicKey(publicKey).toString() });

    user.balance = balance;
    user.sleepData = sleepData;
    user.coinData = coinData;

    return res.status(200).json(user);
  }
);

router.get(
  "/getAdvertiser",
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

    const web3 = new Web3(`https://rinkeby.infura.io/v3/${INFURA_API_KEY}`);

    let ethCoin = await Contracts.EthCoin.createAsync(
      client,
      new Address(client.chainId, LocalAddress.fromPublicKey(publicKey))
    );

    const dappAddress = new Address(
      client.chainId,
      LocalAddress.fromPublicKey(publicKey)
    );
    user.dappBalance = Number(await ethCoin.getBalanceOfAsync(dappAddress));
    user.ethBalance = Number(await web3.eth.getBalance(user.ethAddress));

    return res.status(200).json(user);
  }
);

module.exports = router;
