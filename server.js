const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciaiando o DB mongoDB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});

// Chamando o models
requireDir("./src/models");

const Product = mongoose.model("Product");

// Configurando a primeira rota
// app.get("/", (req, res) => {
//   Product.create({
//     title: "React Native",
//     description: "React Native apps",
//     url: "http://github.com/facebook/react-native"
//   });

//   return res.send("Hello qualquer coisa: bla bla bla");
// });

app.use("/api", require("./src/routes"));

app.listen(3001);
