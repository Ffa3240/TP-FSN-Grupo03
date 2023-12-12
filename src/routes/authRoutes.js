const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authController.js");

router.get("/login", authControllers.login_get);
router.post("/login", authControllers.login_post);
router.get("/register", authControllers.register_get);
router.post("/register", authControllers.register_post);
router.get("/logout", authControllers.logout);

module.exports = router;
