const express = require('express')
const router = express.Router()
const { getAll, getPhoneById } = require('../controllers/phones.controllers')

/* GET ALL */
router.get('/list', getAll)

/* GET ONE */
router.get('/:id', getPhoneById)

module.exports = router