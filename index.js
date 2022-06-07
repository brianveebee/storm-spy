// Configuration
const express = require("express");
const cors = require("cors");
require("dotenv").config()

// Create express instance
const app = express();

// Enable cors
app.use(cors());

// Creates server PORT environment
const PORT = process.env.PORT || 3000;

// Routes
// API page routes to "/routes/index.js"
app.use("/api", require("./routes"));

// Run server PORT
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));