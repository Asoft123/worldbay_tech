const jwt = require("jsonwebtoken")
const config = require("config")
module.exports = function (req, res, next) {
	// 401 Unauthorized
	// 403 Forbidden
	const token = req.header("Authorization")
	if (!token) return res.status(401).send("Access denied.")
	console.log(req)
	try {
		const decoded = jwt.verify(token, config.get("JTW_PRIVATE_KEY"))
		req.user = decoded

		if (Date.now() >= decoded.exp * 1000) return res.status(400).json({ message: "Token Expired" })
		if (!req.user) return res.status(403).send("Access denied.")
		next()
	} catch (ex) {
		res.status(400).send("Invalid token.")
	}
}
