const express = require("express");
const { authenticate } = require("../middleware/authenticate");
const { getIdeas, createIdeas, updateIdeas, deleteIdeas } = require("../controllers/ideaController");

const router = express.Router();

// @route   GET /api/ideas
router.get("/", authenticate, getIdeas);

// @route   POST /api/ideas
router.post("/", authenticate, createIdeas);

// @route   PUT /api/ideas
router.put("/:id", authenticate, updateIdeas);

//@route DELETE /api/ideas
router.delete("/:id", authenticate, deleteIdeas);

module.exports = router;
