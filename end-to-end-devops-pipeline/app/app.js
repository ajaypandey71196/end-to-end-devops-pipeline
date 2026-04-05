const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from DevOps Project,   helm ho gya , argocd  testing 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
