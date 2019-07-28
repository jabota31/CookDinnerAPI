const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());

app.use(morgan("tiny"))

app.use("/", (req, res) => {
    res.json({Mensagem: "Hello World"});
})

app.listen(3000);