const Idea = require("../models/Idea");

async function getIdeas(req, res) {
    try { 
        const response = Idea.findOne();
        return res.status(200).json(response);
    }
    catch (error) { 
        res.status(404).json("error:", error.message)
    }
}

async function createIdeas(req, res) {
    const { title, description } = req.body;
    try { 
        const response = Idea.findByOneAndUpdate({ title, description });
        return res.status(200).json(response);
    }
    catch (error) { 
        res.status(404).json("error:", error.message)
    }
}

async function deleteIdeas(req, res) {
    try { 
        const response = Idea.findOneAndDelete();
        return res.status(200).json(response);
    }
    catch (error) { 
        res.status(404).json("error:", error.message)
    }
}

module.exports = {getIdeas, createIdeas, deleteIdeas}