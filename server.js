const http = require("http")
const app = require("./app")
require("./startups/prod")(app)
const port = process.env.PORT || 4200
const server = http.createServer(app)

server.listen(port, (err, success) => {
	if (err) throw err
	console.log(`Server Running on ${port}`)
})
