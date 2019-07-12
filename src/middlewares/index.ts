import routes from './routes'
import logger from './logger'
import statics from './statics'
import parser from './parser'

import { Application } from 'express'

export default (app: Application) => {
  logger(app)
  statics(app)
  parser(app)
  routes(app)
}
