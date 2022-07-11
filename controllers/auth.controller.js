const config = require("config") // Tobe used for retrieving environment variables
const handleValidationResponse = require("../handlers/validationResponse")
const { validateLogin, validateRegistration } = require("../validations/auth.validations")

async function loginUser(req, res) {
	try {
		await validateLogin(req.body)
	} catch (err) {
		return res.status(400).json(handleValidationResponse({ status: "error", code: 400, message: err.errors[0] }))
	}
	res.send("Test auth routes success")
}
async function registerUser(req, res) {
	try {
		await validateRegistration(req.body)
	} catch (err) {
		return res.status(400).json(handleValidationResponse({ status: "error", code: 400, message: err.errors[0] }))
	}
	res.send("Test registration success")
}

module.exports = {
	loginUser,
	registerUser
}
