const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({
    title: {
        String
    },
    description: {
        String
    }
}, {timestamp: true});

module.exports = mongoose.model("Idea", IdeaSchema);
