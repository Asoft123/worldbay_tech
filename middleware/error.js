const winston = require("winston")
module.exports = function (err, req, res, next) {
	const logger = winston.createLogger({
		level: "info",
		format: winston.format.json(),
		defaultMeta: { service: "user-service" },
		transports: [
			//
			// - Write to all logs with level `info` and below to `combined.log`
			// - Write all logs error (and below) to `error.log`.
			//
			new winston.transports.File({ filename: "error.log", level: "error" }),
			new winston.transports.File({ filename: "combined.log" })
		]
	})

	logger.log({
		level: "info",
		message: err.message,
		err
	})
	logger.log({
		level: "error",
		message: err.message,
		err
	})
	// error
	// warn
	// info
	// verbose
	// debug
	// silly

	res.status(500).send("Something failed")
}