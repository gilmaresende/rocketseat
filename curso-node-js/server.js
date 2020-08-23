const express = require("express");
const mongoose = require("mongoose");

//Iniciando App
const app = express();

//Iniciando DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//Primeira rota
app.get("/", (req, res) => {
  res.send("Hello world.");
});

app.listen(3001);
