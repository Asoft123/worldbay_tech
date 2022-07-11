function handleFetchResponse(response) {
	return {
		status: response?.status ? "success" : "error",
		code: response?.code,
		message: response?.message,
		data: response?.data
	}
}

module.exports = handleFetchResponse
