const { model, Schema } = require("mongoose");

const recipeSchema = new Schema({
    name: String,
    description: String,
    company: String,
    createdAt: String,
});

module.exports = model("Recipe", recipeSchema);