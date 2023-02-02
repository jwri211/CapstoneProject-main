/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Content model defines the fields of the testimonial content in the database.
 * The only fields needed are quote, name and year. The timestamp is used to
 * display the testimonials by newest first.
 */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Content", contentSchema);
