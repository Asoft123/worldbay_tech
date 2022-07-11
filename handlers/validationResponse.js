function handleValidationResponse(response) {
	return {
		status: response?.status,
		code: response?.code,
		message: response?.message
	}
}

module.exports = handleValidationResponse
