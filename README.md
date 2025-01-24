# Backend README for AI Recipe Generator

---

## **AI Recipe Generator - Backend**

This is the backend of the AI Recipe Generator application. It uses Node.js, Express.js, and MongoDB to generate and store recipes based on user inputs. Recipes are generated using the **Gemini AI API**.

---

### **Features**
- Generate recipes with ingredients, cuisine, and dietary preferences.
- Automatically fetch calorie information using the Gemini AI API.
- Save generated recipes to MongoDB.
- Retrieve saved recipes via API.

---

### **Tech Stack**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI API**: Gemini AI API (Google Generative AI)

---

### **Setup Instructions**

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd ai-recipe-generator/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   - Create a `.env` file in the `backend` directory and add the following:
     ```env
     API_KEY=<your-gemini-api-key>
     MONGO_URI=<your-mongodb-connection-string>
     PORT=5000
     ```

4. **Start the Backend Server**
   ```bash
   npm start
   ```

5. **API Endpoints**
   - **POST /generateRecipe**: Generate a recipe using Gemini AI.
     - **Payload**:
       ```json
       {
           "ingredients": ["chicken", "onion", "garlic"],
           "cuisine": "Italian",
           "dietaryPreferences": ["low-carb"]
       }
       ```
   - **GET /recipes**: Retrieve saved recipes with optional filters.

---

### **Dependencies**
- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling tool.
- `dotenv`: Manage environment variables.
- `@google/generative-ai`: Node.js library to interact with the Gemini AI API.

---

### **License**
This project is free to use.

---

Feel free to reach out with any questions or suggestions! 😊
