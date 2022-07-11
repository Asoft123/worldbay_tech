function handleFetchResponse(response) {
	return {
		status: response?.status,
		code: response?.code,
		message: response?.message,
		data: response?.data
	}
}

module.exports = handleFetchResponse
