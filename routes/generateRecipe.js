const express = require("express")
const Recipe = require("../models/recipe.model")
const router = express.Router()
const { generateRecipe } = require("../services/geminiService")

router.post("/", async (req, res) => {
	const { ingredients, dietaryPreferences, cuisine } = req.body

	if (!ingredients || !cuisine) {
		return res.status(400).json({ error: "Missing required fields" })
	}

	try {
		const recipeText = await generateRecipe(
			ingredients,
			dietaryPreferences || [],
			cuisine
		)
		const recipe = {
			name: `Generated Recipe (${cuisine})`,
			ingredients,
			steps: recipeText.split("\n").filter((line) => line.trim()), // Assuming steps are new-line separated
			cuisine,
			dietaryPreferences,
			nutrition: {
				calories:
					recipeText
						.split("\n")
						.find((line) => /calories?/i.test(line)) ||
					"Calorie information not provided",
			},
		}

		// Add dietaryPreferences only if provided
		if (dietaryPreferences && dietaryPreferences.length > 0) {
			recipe.dietaryPreferences = dietaryPreferences
		}

		// Save to MongoDB
		const savedRecipe = (await Recipe.create(recipe)).save()

		res.status(201).json({
			message: "Recipe generated and saved",
			recipe: (await savedRecipe).toJSON(),
		})
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

module.exports = router
