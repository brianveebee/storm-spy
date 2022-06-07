// Require packages
const express = require("express");
const router = express.Router();
const needle = require("needle");

// Declare environment variables
const REACT_APP_NASA_API_URL = process.env.REACT_APP_NASA_API_URL;
const REACT_APP_GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;

// Home page route with try catch for NASA EONET API
// Uses async/await to handle needle's return promise
router.get("/", async (req, res) => {
  try {
    const apiRes = await needle("get", `${REACT_APP_NASA_API_URL}`);
    const data = apiRes.body;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;