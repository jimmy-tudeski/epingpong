const handlersConfig = require('./handlersConfig')

module.exports = app => {
	handlersConfig.forEach(handlerName => {
		require('./handlers/' + handlerName).init(app)
	})
}