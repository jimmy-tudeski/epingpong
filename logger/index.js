const {createLogger, format, transports} = require('winston')

const logger = createLogger({
	format: format.combine(
		format.timestamp(),
		format.json(),
		format.printf(info => `${info.timestamp} - ${info.level}: ${JSON.stringify(info.message)}`),
	),
	transports: [
		new transports.Console({
			format: format.combine(
				format.colorize({ all: true }),
			)
		})
	]
})

module.exports = logger