require('dotenv').config()
const express = require("express");
const controller = require("../controllers");
const jwt = require('jsonwebtoken');
const jwt_guard = require('../controllers/jwt_auth.js');
const user = require('../models').User;
const recipe = require('../models').Recipe;

const router = express.Router();

router.get("/", controller.helloWorld);

router.post('/login', async (req, res) => {
    const requiredUser = await user.findOne({
      where: {
        username: req.body.user
      }
    });
    if(requiredUser && requiredUser.password === req.body.pwd){ //user exists and password matches
      const id = requiredUser.id; //user id for later usages
      var token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 300 // expires in 5min
      });
      res.status(200).json({ auth: true, token: token });
    }
    
    res.status(400).json({
        error: "no user found or wrong password"
    });
  })

  router.get('/all', (req, res) => {
    const all = user.findAll().then(result => res.json(result));
  })
  router.get('/allrecipes', (req, res) => {
    const all = user.findAll({
      include: [{// Notice `include` takes an ARRAY
        model: recipe,
        as: "recipes"
      }]
    }).then(result => res.json(result));
  })

module.exports = router;