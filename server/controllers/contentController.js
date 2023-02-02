/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Content controller is used by axios to make the calls to the 'content'
 * part of the mongo database. This is for the purpose of seeing and modifying
 * testimonials.
 */

const Content = require("../models/contentModel");
const mongoose = require("mongoose");

// @desc    Get all content
// @route   GET /api/content
// @access  Private
const getAllContent = async (req, res) => {
  const contents = await Content.find({}).sort({ createdAt: -1 });
  res.status(200).json(contents);
};

// @desc    Get single content
// @route   GET /api/content/:id
// @access  Private
const getContent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Content does not exist!" });
  }
  const content = await Content.findById(id);
  if (!content) {
    return res.status(404).json({ error: "Content does not exist!" });
  }
  res.status(200).json(content);
};

// @desc    Set content
// @route   POST /api/content
// @access  Private
const setContent = async (req, res) => {
  const { text, name, year } = req.body;
  let emptyFields = [];
  if (!text) {
    emptyFields.push("title");
  }
  if (!name) {
    emptyFields.push("name");
  }
  if (!year) {
    emptyFields.push("year");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }
  // create data to the database
  try {
    const content = await Content.create({ text, name, year });
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Delete content
// @route   DELETE /api/content/:id
// @access  Private
const deleteContent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Content does not exist!" });
  }
  const content = await Content.findOneAndDelete({ _id: id });
  if (!content) {
    return res.status(404).json({ error: "Content does not exist!" });
  }
  res.status(200).json(content);
};

// @desc    Update content
// @route   PATCH /api/content/:id
// @access  Private
const updateContent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Content does not exist!" });
  }
  const content = await Content.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!content) {
    return res.status(404).json({ error: "Content does not exist!" });
  }
  res.status(200).json(content);
};

module.exports = {
  setContent,
  getAllContent,
  getContent,
  deleteContent,
  updateContent,
};
