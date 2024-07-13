const express = require("express");
const path = require("path");
const app = express();

// Middleware per servire i file statici
app.use("/css", express.static(path.join(__dirname, "assets", "css")));
app.use("/js", express.static(path.join(__dirname, "assets", "js")));
app.use("/img", express.static(path.join(__dirname, "assets", "img")));
app.use("/scss", express.static(path.join(__dirname, "assets", "scss")));
// Route per la homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Avvio del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
