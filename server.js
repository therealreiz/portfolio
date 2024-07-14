const express = require("express");
const path = require("path");
const app = express();

// Middleware per servire i file statici
app.use(express.static(path.join(__dirname, "./assets/css/styles.css")));
app.use(express.static(path.join(__dirname, "./assets/js/main.js")));
app.use(express.static(path.join(__dirname, "./assets/img/about.jpg")));
app.use(express.static(path.join(__dirname, "./assets/img/perfil.png")));
app.use(express.static(path.join(__dirname, "./assets/img/work1.jpg")));
app.use(express.static(path.join(__dirname, "./assets/img/work2.jpg")));
app.use(express.static(path.join(__dirname, "./assets/img/work3.jpg")));
app.use(express.static(path.join(__dirname, "./assets/img/work4.jpg")));
app.use(express.static(path.join(__dirname, "./assets/img/work5.jpg")));
app.use(express.static(path.join(__dirname, "./assets/img/work6.jpg")));
app.use(express.static(path.join(__dirname, "assets/scss/styles.scss")));
app.use(express.static(path.join(__dirname, "/about.jpg")));
app.use(express.static(path.join(__dirname, "/perfil.png")));
app.use(express.static(path.join(__dirname, "/preview.png")));
app.use(express.static(path.join(__dirname, "/work1.jpg")));
app.use(express.static(path.join(__dirname, "/work2.jpg")));
app.use(express.static(path.join(__dirname, "/work3.jpg")));
app.use(express.static(path.join(__dirname, "/work4.jpg")));
app.use(express.static(path.join(__dirname, "/work5.jpg")));
app.use(express.static(path.join(__dirname, "/work6.jpg")));
// Route per la homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Avvio del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
