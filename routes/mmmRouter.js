const express = require('express')
const router = express.Router()
// const User = require('../models/user')

router.post('/', async (req, res) => {
    return res.status(200).json({ message: `homeMMM` })
})
router.post('/mean', async (req, res) => {
    const {principalValues} = req.body;
    
    return res.status(200).json({ message: principalValues })
})
router.post('/median', (req, res) => {
    return res.status(200).json({ message: `median` })
})
router.post('/mode', (req, res) => {
    return res.status(200).json({ message: `mode` })
})

module.exports = router