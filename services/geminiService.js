require("dotenv").config()

const { GoogleGenerativeAI } = require("@google/generative-ai")

const googleAI = new GoogleGenerativeAI(process.env.API_KEY)
const geminiConfig = {
	temperature: 0.9,
	topP: 1,
	topK: 1,
	maxOutputTokens: 4096,
}

const geminiModel = googleAI.getGenerativeModel({
	model: "gemini-1.5-flash",
	geminiConfig,
})

async function generateRecipe(ingredients, dietaryPreferences, cuisine) {
	try {
		const prompt = `
            Create a recipe based on the following details:
            1. Cuisine: ${cuisine}
            2. Dietary Preferences: ${dietaryPreferences.join(", ")}
            3. Ingredients: ${ingredients.join(", ")}
            Include the following:
            - Step-by-step instructions.
            - Total calories for the recipe at the end of line.`

		const result = await geminiModel.generateContent(prompt)
		const response = result.response

		if (response) {
			return response.text()
		} else {
			throw new Error("No response from API")
		}
	} catch (error) {
		console.log("API Error:", error.message)
		throw new Error("Failed to generate recipe from API")
	}
}

module.exports = { generateRecipe }
