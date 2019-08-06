require("dotenv").config();
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    var raw_token = req.headers['Authorization'] || req.headers['authorization'];
    if (!raw_token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    token = raw_token.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  }