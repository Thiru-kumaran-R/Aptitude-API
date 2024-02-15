const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb+srv://thiru:jjhtrF0HFn55rhrI@firstproject.27hr6ge.mongodb.net/questions'

const aptQuestion = require("./routes/routes")

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/view/index.html"))
})

app.use("/", aptQuestion);
app.use((error, req, res, next) => {
    const message = error.message;
    const statusCode = error.statusCode;
    if(error.field){
        return res.status(statusCode).json({message : message, statusCode : statusCode, field : error.field});
    }
    return res.status(statusCode).json({message : message, statusCode : statusCode});
});

mongoose
    .connect(MONGODB_URI)
    .then(result => {
        app.listen(port, () => `Server running on port ${port}` )
    })
    .catch(err => {
        console.log(err);
    });
