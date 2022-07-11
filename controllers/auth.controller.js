const config = require("config")
const axios = require("axios")

const { SQL_OPTIONS, SQL_REF_NO } = require("../constants")
const handleValidationResponse = require("../handlers/validationResponse")
const handleAuthResponse = require("../handlers/authResponse")
const { validateLogin, validateRegistration } = require("../validations/auth.validations")
const generateAuthToken = require("../handlers/generateJwt")

const loginUser = async (req, res) => {
	try {
		await validateLogin(req.body)
	} catch (err) {
		return res.status(400).json(handleValidationResponse({ status: "error", code: 400, message: err.errors[0] }))
	}

	const { email_address, user_password } = req.body
	const payloadData = [{ sql_ref_no: SQL_REF_NO.two, email_address, user_password, sql_option: SQL_OPTIONS.new }]
	const payload = JSON.stringify(payloadData)
	const response = await axios.get(`${config.get("BASE_URL")}/get?jstring=${payload}`)

	if (response?.data.length > 0 && Number(response?.data[0].Message_Id) === 2) return res.status(404).json(handleValidationResponse({ code: 404, status: "error", message: "No user was found" }))

	if (response?.data.length > 0 && response?.data[0].id) {
		console.log(response?.data[0])
		const token = await generateAuthToken({
			id: response?.data[0]?.id,
			email: response?.data[0]?.user_name,
			name: response?.data[0]?.display_name
		})
		return res.status(200).json(handleAuthResponse({ code: 200, status: "success", token, message: "Login Successful" }))
	}

	res.status(422).json({ data: response?.data })
}

const registerUser = async (req, res) => {
	console.log("Play", req.body)
	try {
		await validateRegistration(req.body)
	} catch (err) {
		return res.status(400).json(handleValidationResponse({ status: "error", code: 400, message: err.errors[0] }))
	}

	const { user_first_name, user_email_address, user_last_name, user_password } = req.body
	const payloadData = [{ sql_ref_no: SQL_REF_NO.five, user_first_name, user_last_name, user_email_address, user_password, sql_option: SQL_OPTIONS.new }]
	const payload = JSON.stringify(payloadData)
	const response = await axios.get(`${config.get("BASE_URL")}/set?jstring=${payload}`)
	if (response?.data.length > 0 && Number(response?.data[0]?.Message_Id) === 4) {
		return res.status(400).json(handleValidationResponse({ status: "error", code: 400, message: "This username already exists" }))
	}

	if (response?.data.length > 0 && Number(response?.data[0]?.Message_Id) === 1) {
		return res.status(201).json(handleValidationResponse({ status: "success", code: 201, message: "Registration was success" }))
	}

	// return res.status(400).json(handleValidationResponse({ status: "error", code: 400, message: response?.data?.Message_Text }))
}

module.exports = {
	loginUser,
	registerUser
}
