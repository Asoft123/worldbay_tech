const { loginUser, registerUser } = require("../controllers/auth.controller")
const express = require("express")
const router = express.Router()

router.post("/user/login", loginUser)
router.post("/user/register", registerUser)

module.exports = router
