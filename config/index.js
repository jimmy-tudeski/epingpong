const path = require('path')

module.exports =  {
	port: process.env.PORT || 3000,
	public: path.join(process.cwd(), 'client', 'build'),
}