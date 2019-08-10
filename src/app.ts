import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import 'dotenv/config'

import routes from './routes'

class App {
	public express: express.Application

	public constructor () {
		this.express = express()
		this.middlewares()
		this.database()
		this.routes()
	}

	private middlewares (): void {
		this.express.use(cors())
		this.express.use(express.json())
		this.express.use(morgan('dev'))
		this.express.use(express.urlencoded({ extended: false }))
	}

	private database (): void {
		mongoose.connect(process.env.DB_HOST, {
			useNewUrlParser: true
		})
	}

	private routes (): void {
		this.express.use(routes)
	}
}

const app = new App().express
app.listen(3333)

export default app
