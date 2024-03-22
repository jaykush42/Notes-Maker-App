const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
const uri = process.env.uri;


async function connectToMongoDB() {
   try {
       // Connect the client to the MongoDB Atlas cluster
       await mongoose.connect(uri);

   } catch (error) {
       console.error("Error connecting to MongoDB Atlas:", error);
   } 
}

// Call the function to connect to MongoDB Atlas
connectToMongoDB();

const userSchema = new mongoose.Schema({
    title: {
        type: String,
		required: true,
    },
    content: {
        type: String,
    }
},{ timestamps: true });



// Define Note model
const Note = mongoose.model("Notes", userSchema);

// Listen for successful MongoDB connection
mongoose.connection.on("connected", () => {
	console.log("Connected to MongoDB Atlas");
});

// Listen for MongoDB connection errors
mongoose.connection.on("error", (err) => {
	console.error("MongoDB connection error:", err);
});

// Routes
app.get("/", (req, res) => {
	res.send("Hello, this is the root!");
});

app.get("/api/notes", async (req, res) => {
	try {
		const notes = await Note.find();
		res.json(notes);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.put("/api/notes/:id", async (req, res) => {
	const noteId = req.params.id;
	const {title, content} = req.body;
	try {
		const updatedNote = await Note.findByIdAndUpdate(
			noteId,
			{title, content},
			{ new: true }
		);
		console.log(updatedNote);
		res.json(updatedNote);
	} catch (error) {
		res.status(404).json({ message: "Note not found" });
	}
});

// Delete Note by ID
app.delete("/api/notes/:id", async (req, res) => {
	const noteId = req.params.id;

	try {
		await Note.findByIdAndDelete(noteId);
		res.json({ message: "Note deleted successfully" });
	} catch (error) {
		res.status(404).json({ message: "Note not found" });
	}
});

app.post("/api/notes", async (req, res) => {
	const { title, content } = req.body;
  
	// const note = new Note({ title, content });
	const note = await Note.create({
		title: title,
		content: content,
	  });

	try {
		const newNote = await note.save();
		res.status(201).json(newNote);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
