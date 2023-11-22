const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop')

router.get('/', shopController.getAll);
// router.get('/:id', productsController.getById)
// router.post('/:id/cart', productsController.addToCart)



module.exports = router;