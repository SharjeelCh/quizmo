const asyncHandler = require("express-async-handler");
const nodeMalier = require("nodemailer");
require("dotenv").config("../.env");
const crypto = require("crypto");
const User = require("../Modals/userModal");

const transporter = nodeMalier.createTransport({
 host: "smtp.gmail.com",
 port: 587,
 secure: false,
 auth: {
  user: process.env.USER_EMAIL,
  pass: process.env.USER_PASSWORD,
 },
});

const sendToken = asyncHandler(async (req, res) => {
 const token = crypto.randomBytes(20).toString("hex");
 const email = req.body.email;

 await User.updateOne(
  { email },
  { verificationToken: token, isVerified: false }
 );

 var info = {
  from: process.env.USER_EMAIL,
  to: email,
  subject: "Verification Token",
  html: `Press <a href="http://localhost:${process.env.PORT}/verify/${token}">here</a> to verify your account`,
 };

 transporter.sendMail(info, (err, data) => {
  if (err) {
   console.log(err);
   res.status(500).json({ message: "Error sending email" });
  } else {
   console.log("Email sent");
   res.status(200).json({ message: "Verification email sent" });
  }
 });
});

const verifyToken = asyncHandler(async (req, res) => {
 const token = req.params.token;
 const user = await User.findOne({ verificationToken: token });

 if (user) {
  user.isVerified = true;
  user.verificationToken = undefined;

  await user.save();
  res.status(200).json({ message: "User verified" });
 } else {
  res.status(400).json({ message: "Invalid Token" });
 }
});

const Signup = asyncHandler(async (req, res) => {
 const { username, email, password } = req.body;
 if (!username || !email || !password) {
  res.status(400);
  throw new Error("All fields are required");
 }
 const checkAlreadyUser = await User.findOne({ email });
 if (checkAlreadyUser) {
  res.status(400);
  throw new Error("User already exists");
 }
 const newUser = new User({
  username,
  email,
  password,
  verificationToken: undefined,
  isVerified: false,
 });
 await newUser.save();
 await sendToken(req, res);
});

const Login = asyncHandler(async (req, res) => {
 const { email, password } = req.body;
 if (!email || !password) {
  res.status(400);
  throw new Error("All fields are required");
 }
 const checkUserinDB = await User.findOne({ email });
 const isVerified = checkUserinDB.isVerified;

 if (checkUserinDB) {
  if (isVerified) {
   if (checkUserinDB.password === password) {
    res.status(200).json({ message: "User logged in", data: checkUserinDB });
   } else {
    res.status(400).json({ message: "Invalid password" });
   }
  } else {
   res.status(400).json({ message: "User not verified" });
  }
 } else {
  res.status(400).json({ message: "User not found" });
 }
});

const resetPassword = asyncHandler(async (req, res) => {
 const { email } = req.body;
 if (!email) {
  res.status(400);
  throw new Error("Email is required");
 }
 const checkUserinDB = await User.findOne({ email });
 if (checkUserinDB) {
 }
});
module.exports = { Signup, verifyToken, sendToken, Login };
