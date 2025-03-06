const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs"); // For hashing passwords
const jwt = require("jsonwebtoken");
const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");
require("dotenv").config();
const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Allow frontend to access API
require("dotenv").config();

console.log("MONGO_URI:", process.env.MONGO_URI);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://sana1407:BQaZFEjKBVL86Wbi@cluster0.egiup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));



// ✅ Signup API Route
app.post("/api/users/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
});
// ✅ User Login Route

app.post("/api/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "All fields are required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "your_jwt_secret", { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});
const projectId = "labouroute-chatbot"; // Replace with your Dialogflow project ID
const sessionClient = new dialogflow.SessionsClient({
  keyFilename: "C:\Users\mranu\OneDrive\Desktop\major project\backend\labouroute-chatbot-038789a78127.json", // Ensure this file is correctly configured
});

app.post("/api/chatbot", async (req, res) => {
  try {
    const userMessage = req.body.message;
    const sessionId = uuid.v4();
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: userMessage,
          languageCode: "hi", // Hindi language support
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;

    res.json({ text: result.fulfillmentText });
  } catch (error) {
    console.error("Dialogflow API error:", error);
    res.status(500).send("Error processing request");
  }
});


// Start the server
app.listen(5002, () => {
  console.log("🚀 Server running on port 5002");
});
