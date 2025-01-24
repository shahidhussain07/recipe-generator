const mongoose = require("mongoose")

const reciperSchema = new mongoose.Schema(
	{
		name: {
			type: [String],
			required: true,
		},
		ingredients: {
			type: [String],
			required: true,
		},
		steps: {
			type: [String],
			required: true,
		},
		cuisine: {
			type: String,
			required: true,
		},
		dietaryPreferences: {
			type: [String],
			required: false,
		},
		nutrition: {
			calories: {
				type: String,
				required: false,
			},
		},
	},
	{ timestamps: true }
)

const Recipe = mongoose.model("Recipe", reciperSchema)

module.exports = Recipe
