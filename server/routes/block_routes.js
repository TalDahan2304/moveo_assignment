const express = require('express')
const router = express.Router()

const Block = require('../controllers/block_controller')

router.post('/', Block.readCode)

module.exports = router