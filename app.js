require("express-async-errors")
const config = require("config")
const path = require("path")
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

const error = require("./middleware/error")

const auth = require("./routes/auth.routes")
// const invalidRoutes = require("./routes/invalid.routes")

const app = express()

if (!config.get("BASE_URL")) {
	console.error("FATAL ERROR: BASE URL not defined")
	process.exit(1)
}

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/client/build")))

	app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")))
} else {
	app.get("/", (req, res) => {
		res.send("API is running....")
	})
}
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
		return res.status(200).json({})
	}
	next()
})

app.use("/api/v1/auth", auth)
// app.use("*", invalidRoutes)
app.use(error)

module.exports = app
