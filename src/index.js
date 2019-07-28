var express = require("express");

var app = express();

app.use("/", (req, res) => {
    res.json({"Mensagem": "Hello World"});
})

app.listen(3000);

module.exports = app;