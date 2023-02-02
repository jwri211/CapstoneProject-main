/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * User controllers describe the functions used when creating and checking
 * users who sign up to the website. It uses JWT - JSon Web Tokens for
 * authentication.
 */

const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const makeToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2d" });
};

// User login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // make a token
    const token = makeToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// User signup
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    // make a token
    const token = makeToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
