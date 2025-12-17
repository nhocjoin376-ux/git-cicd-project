const express = require("express");
const path = require("path");

const app = express();

// Serve frontend
app.use(express.static("public"));

// Test API
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Backend running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
