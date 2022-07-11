function handleValidationResponse(response) {
	return {
		status: "error",
		code: response?.code,
		message: response?.message
	}
}

module.exports = handleValidationResponse
