const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
	ctx.body = 'Ping Pong!'
})

module.exports = app