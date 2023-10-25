const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const aptQuestion = require("./routes/routes")

const app = express();

const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/view/index.html"))
})

app.use("/", aptQuestion);


app.listen(port, () => `Server running on port ${port}` )