const Idea = require("../models/Idea");

async function getIdeas(req, res) {
    try { 
        const response = await Idea.find().sort({ createdAt: -1 });
        return res.status(200).json(response);
    }
    catch (error) { 
        res.status(404).json({ error: error.message })
    }
}

async function createIdeas(req, res) {
    const { title, description } = req.body;
    console.log("createIdeas called: ", req.body);

    try { 
        const response = await Idea.create({ title, description });
        return res.status(200).json(response);
    }
    catch (error) { 
        res.status(404).json({ error: error.message })
    }
}
async function updateIdeas(req, res) {
    const id = req.params.id;
    const { title, description } = req.body;

    try { 
        const response = await Idea.findByIdAndUpdate(id, { title, description });
        return res.status(200).json(response);
    }
    catch (error) { 
        res.status(404).json({ error: error.message })
    }
}

async function deleteIdeas(req, res) {
    const id = req.params.id;

    try { 
        const response = await Idea.findByIdAndDelete(id);
        return res.status(200).json(response);
    }
    catch (error) { 
        res.status(404).json({ error: error.message })
    }
}

module.exports = {getIdeas, createIdeas, updateIdeas, deleteIdeas}