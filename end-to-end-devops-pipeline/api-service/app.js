const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from API Service 🚀");
});

app.listen(4000, () => {
  console.log("API Service running on port 4000");
});