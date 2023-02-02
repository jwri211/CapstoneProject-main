/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * RequireAuth is middleware that is used to authenticate a user against
 * the information in the database. This stops unauthorized users from performing
 * crud operations on the database content in the event that they bypass the login
 * state and can see the operations buttons.
 */

const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // verification and auth
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({ error: "Authorised token required" });
  }
  // get auth string from header
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Unauthorised request" });
  }
};

module.exports = requireAuth;
