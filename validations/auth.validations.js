const yup = require("yup")

function validateLogin(user) {
	const schema = yup.object({
		email_address: yup.string().email().required().label("Email Address"),
		user_password: yup.string().required().min(6).max(255).label("Passowrd")
	})

	return schema.validate(user, { abortEarly: false })
}
function validateRegistration(user) {
	const schema = yup.object({
		user_first_nane: yup.string().min(2).max(25).required().label("First Name"),
		user_last_nane: yup.string().min(2).max(25).required().label("Last Name"),
		user_email_address: yup.string().email().required().label("Email Address"),
		user_password: yup.string().required().min(6).max(255).label("Passowrd")
	})

	return schema.validate(user, { abortEarly: false })
}

module.exports = {
	validateLogin,
	validateRegistration
}
