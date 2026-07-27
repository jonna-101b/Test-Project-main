const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({
    title: {
        String
    },
    description: {
        String
    }
});

module.exports = mongoose.model("Idea", IdeaSchema);
