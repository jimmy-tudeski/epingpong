const serve = require('koa-static')
const config = require('config/index')

exports.init = app => app.use(serve(config.public))