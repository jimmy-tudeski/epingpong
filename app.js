const Koa = require('koa')
const initHandlers = require('./middlewares/initHandlers')

const app = new Koa()

initHandlers(app)

module.exports = app