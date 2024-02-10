const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require('mongoose')

const aptQuestion = require("./routes/routes")

const app = express();

const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/view/index.html"))
})

app.use("/", aptQuestion);

mongoose
    .connect('mongodb+srv://thiru:jjhtrF0HFn55rhrI@firstproject.27hr6ge.mongodb.net/questions')
    .then(result => {
        app.listen(port, () => `Server running on port ${port}` )
    })
    .catch(err => {
        console.log(err);
    });
