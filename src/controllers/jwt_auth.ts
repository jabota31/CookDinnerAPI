import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export default (req: Request, res: Response, next: Function): Response => {
	const rawToken = req.headers['Authorization']// || req.headers['authorization']
	if (!rawToken) return res.status(401).send({ auth: false, message: 'No token provided.' })

	let token: string
	if (typeof (rawToken) === 'string') {
		token = rawToken.replace('Bearer ', '')
	} else {
		return res.status(400).send({ auth: false, message: `Error 400 Bad Request: wrong token type ${typeof (rawToken)}` })
	}
	jwt.verify(token, process.env.JWT_SECRET, (err, decoded): Response => {
		if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

		// se tudo estiver ok, salva no request para uso posterior
		req.user = decoded.id
		next()
	})
}
