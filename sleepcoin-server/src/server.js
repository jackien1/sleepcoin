require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const passport = require("passport");
const authRouter = require("./routes/authRouter");
const sleepRouter = require("./routes/sleepRouter");
const gatewayRouter = require("./routes/gatewayRouter");
const mongoose = require("mongoose");
require("./passport")(passport);
const { MONGOOSE } = process.env;

mongoose.connect(MONGOOSE, { useNewUrlParser: true });

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB connected successfully!");
});
db.on("error", err => {
  console.error(`Error while connecting to DB: ${err.message}`);
});

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/auth/", authRouter);
app.use("/api/sleep/", sleepRouter);
app.use("/api/gateway/", gatewayRouter);
app.use(passport.initialize());

const server = http.createServer(app);
server.listen(5000);
