const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

// @route   GET /api/ideas
router.get("/", async (req, res) => {
  try { 
    const response = Idea.findOne();
    return res.status(200).json(response);
  }
  catch (error) { 
    res.status(404).json("error:", error.message)
  }
  
});

// @route   POST /api/ideas
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try { 
    const response = Idea.findByOneAndUpdate({ title, description });
    return res.status(200).json(response);
  }
  catch (error) { 
    res.status(404).json("error:", error.message)
  }
});

router.delete("/", async (req, res) => { 
  try { 
    const response = Idea.findOneAndDelete();
    return res.status(200).json(response);
  }
  catch (error) { 
    res.status(404).json("error:", error.message)
  }
})

module.exports = router;
