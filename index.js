const mongoose = require("mongoose");
const articleModel = require("./Article");

mongoose.connect('mongodb://127.0.0.1:27017/projeto_02');

const Article = mongoose.model("Article", articleModel);

const artigo = new Article({ title: "Título", author: "Autor", body: "Corpo" });

artigo.save().then(() => {
    console.log("Artigo Salvo!");
}).catch(err => {
    console.log(err);
});