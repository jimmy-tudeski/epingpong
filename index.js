const app = require('./app')
const {port} = require('./config')

app.listen(port, () => {
	console.log(`Server listen on port ${port}`)
})