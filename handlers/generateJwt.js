const config = require("config")
const jwt = require("jsonwebtoken")

const generateAuthToken = function (data) {
	const token = jwt.sign(
		{
			_id: data.id,
			email_addres: data.email,
			name: data.name
		},
		config.get("JTW_PRIVATE_KEY"),
		{ expiresIn: "1020h" }
	)
	return token
}

module.exports = generateAuthToken
