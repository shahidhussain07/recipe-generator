require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const generateRecipe = require("./routes/generateRecipe")
const recipe = require("./routes/recipe")

const app = express()

app.use(express.json())
app.use(cors())

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("connected to mongoDB")
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB:", err)
	})

// routes
app.use("/generateRecipe", generateRecipe)
app.use("/recipe", recipe)

app.listen(3000, () => {
	console.log("Server is running on port 3000")
})
