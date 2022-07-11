function handleAuthResponse(response) {
	return {
		status: response?.status,
		code: response?.code,
		message: response?.message,
		token: response?.token ? response?.token : ""
	}
}

module.exports = handleAuthResponse
