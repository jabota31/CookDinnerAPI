import { Router, Request, Response } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)

routes.post('/users', UserController.store)

export default routes
/*
import jwt from 'jsonwebtoken'
import jwtGuard from '../controllers/jwt_auth'
import controller from '../controllers'
import models from '../models'

const user = models.User
const recipe = models.Recipe

router.get('/', controller.helloWorld)

router.post('/login', async (req, res): Promise<any> => {
	const requiredUser = await user.findOne({
		where: {
			username: req.body.user
		}
	})
	if (requiredUser && requiredUser.password === req.body.pwd) { // user exists and password matches
		const id = requiredUser.id // user id for later usages
		var token = jwt.sign({ id }, process.env.JWT_SECRET, {
			expiresIn: 300 // expires in 5min
		})
		res.status(200).json({ auth: true, token: token })
	}

	res.status(400).json({
		error: 'no user found or wrong password'
	})
})

router.get('/all', (req, res): void => {
	user.findAll().then((result: any): Response => res.json(result))
})
router.get('/allrecipes', (req, res): any => {
	const all = user.findAll({
		include: [{ // Notice `include` takes an ARRAY
			model: recipe,
			as: 'recipes'
		}]
	}).then((result: any): Response => res.json(result))
})

export default router
 */
