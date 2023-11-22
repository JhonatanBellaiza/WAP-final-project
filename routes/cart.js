const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart')

router.get('/', cartController.getById)
router.post('/', cartController.addToCart);

router.post('/delete', cartController.deleteFromCart)



module.exports = router;