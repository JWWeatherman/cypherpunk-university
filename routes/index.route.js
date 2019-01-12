const express = require('express')
const router = express.Router()
const {getIndex} = require('../controllers/view.ctl')

/* GET home page. */
router.get('/', getIndex)

module.exports = router
