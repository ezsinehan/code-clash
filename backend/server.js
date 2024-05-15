const express = require("express");
const cors = require("cors");
const axios = require("axios");
const https = require("https");
const fs = require("fs");

const app = express();

app.use(cors()); // enabling cors for all domains
app.use(express.json()); // parses json bodies

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};
const PORT = process.env.PORT || 3001;

https.createServer(options, app).listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});

const PISTON_API = "https://localhost:2000";
app.post("/execute", async (req, res) => {
  try {
    const { language, version, files } = req.body;
    const response = await axios.post(`${PISTON_API}/api/v2/execute`, {
      language,
      version,
      files,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error connecting to piston:", error);
    res.status(500).json({ error: "Failed to execute code" });
  }
});

// app.post("/execute", async (req, res) => {
//   console.log("Test endpoint hit:", req.body);
//   res.json({ message: "Test success", data: req.body });
// });
