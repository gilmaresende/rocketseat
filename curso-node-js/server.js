const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
//Iniciando App
const app = express();

//Iniciando DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

requireDir("./src/models");

const Product = mongoose.model("Product");

app.get("/", (req, res) => {
  Product.create({
    title: "React native",
    description: "Buid native apps with React",
    url: "https://github.com/gilmaresende/rocketseat",
  });

  return res.send("Hello rocketseat.");
});

app.listen(3001);
