const express = require("express");
const bodyParser = require("body-parser");

const aptQuestion = require("./routes/routes")

const app = express();

const port = 9090;

app.use("/", aptQuestion);

app.listen(port, () => `Server running on port ${port}` )