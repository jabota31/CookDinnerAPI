require('dotenv').config()
const express = require("express");
const controller = require("../controllers");
const jwt = require('jsonwebtoken');
const jwt_guard = require('../controllers/jwt_auth.js');

const router = express.Router();

router.get("/", jwt_guard, controller.helloWorld);

router.post('/login', (req, res) => {
    if(req.body.user == 'luiz' && req.body.pwd == '123'){
      //auth ok
      const id = 1; //esse id viria do banco de dados
      var token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 300 // expires in 5min
      });
      res.status(200).json({ auth: true, token: token });
    }
    
    res.status(200).json({
        pqp: "deu ruim"
    });
    console.log(req.body);
  })

module.exports = router;