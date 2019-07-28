const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/", (req, res) => {
    res.json({Mensagem: "Hello World"});
})

app.listen(3000);