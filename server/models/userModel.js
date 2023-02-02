/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * User model defines the fields of the users in the database. Also
 * includes some methods used for security purposes when creating new users.
 */

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup function/method
userSchema.statics.signup = async function (email, password) {
  // validate
  if (!email || !password) {
    throw Error("Please make sure all fields are filled in correctly");
  }
  // Use validator instead of using regex
  if (!validator.isEmail(email)) {
    throw Error("Invalid email address");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password isnt strong enough");
  }
  // If email already exists throw an error message.
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Another user with this Email already exists");
  }

  // generate a salt with a default value of 10
  const salt = await bcrypt.genSalt(10);
  // Hash method and generated salt
  const hash = await bcrypt.hash(password, salt);
  // create document hash salt password
  const user = await this.create({ email, password: hash });
  return user;
};

// static login function/method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Please make sure all fields are filled in correctly");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("We didn't recognise this email");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Sorry, that password isn't right");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
