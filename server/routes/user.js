/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Routing file for the users when signing up or logging in.
 */

const express = require("express");

// controller
const { signupUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// sign up
router.post("/signup", signupUser);

// login
router.post("/login", loginUser);

module.exports = router;
