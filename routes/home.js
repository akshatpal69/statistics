const express = require('express')
const router = express.Router()
// const User = require('../models/user')

router.get('/', async (req, res) => {
    return res.status(200).json({ message: `routes listed here` })
})



module.exports = router