const express = require("express")
const router = express.Router()

const recipe = require("../models/recipe.model")

router.get("/", async (req, res) => {
	const { cuisine, dietaryPreferences } = req.body

	try {
		const filters = {}
		if (cuisine) filters.cuisine = cuisine
		if (dietaryPreferences) filters.dietaryPreferences = dietaryPreferences

		const recipes = await recipe.find(filters)
		res.status(200).json({ recipes })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

module.exports = router
