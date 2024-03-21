const express = require('express');
const router = express.Router();

const ProductContoller = require('../controller/productcontoller')

router.get('/', ProductContoller.index);
router.post('/show', ProductContoller.show);
router.post('/store', ProductContoller.store);
router.post('/update', ProductContoller.update);
router.post('/delete', ProductContoller.destroy);

module.exports = router