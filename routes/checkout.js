const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkout')

router.get('/', checkoutController.getPage)
router.post('/', checkoutController.buyProduct)
//router.post('/', checkoutController.addToCart);



module.exports = router;