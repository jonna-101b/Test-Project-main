const express = require("express");
const router = express.Router();
const { getIdeas, createIdeas, deleteIdeas } = require("../controllers/ideaController");

// @route   GET /api/ideas
router.get("/", getIdeas);

// @route   POST /api/ideas
router.post("/", createIdeas);

//@route DELETE /api/ideas
router.delete("/", deleteIdeas)

module.exports = router;
