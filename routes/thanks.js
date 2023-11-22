const express = require('express');
const router = express.Router();
const thanksController = require('../controllers/thanks')

router.get('/', thanksController.getPage);
router.post('/', thanksController.goBackHome)



module.exports = router;