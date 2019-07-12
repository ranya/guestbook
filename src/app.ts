import express from 'express'
import middlewares from './middlewares'

// Create Express application
const app = express()
const port = process.env.PORT || '3000'

app.set('port', port)
middlewares(app)

export default app
