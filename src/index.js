var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());

app.use("/", (req, res) => {
    res.json({"Mensagem": "Hello World"});
})

app.listen(3000);

module.exports = app;