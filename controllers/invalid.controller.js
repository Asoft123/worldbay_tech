const handleValidationResponse = require("../handlers/validationResponse")

const notFoundRoutes = async (req, res) => {
	res.status(404).json(handleValidationResponse({ code: 404, status: "error", message: "Route not found" }))
}

module.exports = {
	notFoundRoutes
}
