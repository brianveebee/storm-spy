// Configuration
const express = require("express");
const cors = require("cors");
require("dotenv").config()

// Creates server PORT environment
const PORT = process.env.PORT || 5000;

// Create express instance
const app = express();

// Routes
// API page routes to top-level index.js
app.use("/api", require("./routes"));

// Enable cors
app.use(cors());

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));