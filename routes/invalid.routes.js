const { notFoundRoutes } = require("../controllers/invalid.controller")
const express = require("express")
const router = express.Router()

router.get("/", notFoundRoutes)
router.post("/", notFoundRoutes)
router.put("/", notFoundRoutes)
router.patch("/", notFoundRoutes)
router.delete("/", notFoundRoutes)

module.exports = router
