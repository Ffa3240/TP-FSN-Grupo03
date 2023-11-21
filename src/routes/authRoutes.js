const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController')

router.get("/login_get", authControllers.login_get)
router.post("/login_post", authControllers.login_post)
router.get("/register_get", authControllers.register_get)
router.post("/register_post", authControllers.register_post)
router.get("/logout", authControllers.logout)

module.exports = router;