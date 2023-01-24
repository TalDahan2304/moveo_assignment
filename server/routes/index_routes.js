const express = require('express');
const router = express.Router();
const Index = require('../controllers/index')

router.post('/',Index.mainfunc)

module.exports = router;