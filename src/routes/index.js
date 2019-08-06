import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import jwt_guard from '../controllers/jwt_auth'
const user = require('../models').User;
const recipe = require('../models').Recipe;

dotenv.config()

const router = express.Router()

router.get('/', controller.helloWorld)

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
      })
      res.status(200).json({ auth: true, token: token })
    }
    
    res.status(400).json({
        error: "no user found or wrong password"
    });
  })

  router.get('/all', (req, res) => {
    const all = user.findAll().then(result => res.json(result))
  })
  router.get('/allrecipes', (req, res) => {
    const all = user.findAll({
      include: [{// Notice `include` takes an ARRAY
        model: recipe,
        as: "recipes"
      }]
    }).then(result => res.json(result))
  })

export default router
