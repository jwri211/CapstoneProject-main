/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Routing file for the content(testimonials) API. Sets authorisation checks
 * on CRUD functionality, checking user authentication when performing these
 * tasks
 */

const express = require("express");
const {
  setContent,
  getAllContent,
  getContent,
  deleteContent,
  updateContent,
} = require("../controllers/contentController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Check if user is authorised for all routes

// GET all content
router.get("/", getAllContent);

// GET single content
router.get("/:id", getContent);

// POST new content
router.post("/", requireAuth, setContent);

// DELETE content
router.delete("/:id", requireAuth, deleteContent);

// UPDATE content
router.patch("/:id", requireAuth, updateContent);

module.exports = router;
