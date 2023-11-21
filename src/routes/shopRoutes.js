const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController')

router.get("/", shopControllers.shop)
router.get("/item/:id", shopControllers.item)
router.post("/item/:id/add", (req, res) => res.send(`Route Item  ${req.params.id} Shop Add View`))
router.get("/cart", (req, res) => res.send("Get - Route for Shop Cart View"))
router.post("/cart", (req, res) => res.send("Post - Route for Shop Cart View"))

module.exports = router;