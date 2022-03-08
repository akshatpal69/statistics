const express = require('express')
const router = express.Router()
// const User = require('../models/user')

router.post('/', async (req, res) => {
    return res.status(200).json({ message: `homeMMM` })
})
router.get('/', async (req, res) => {
    return res.status(200).json({ message: `routes listed here` })
})

router.post('/mean', async (req, res) => {
    //get array from http request body
    const { terms } = req.body
    //check if array size is greater than 1
    if (undefined !== terms && terms.length > 1) {
        let sum = 0
        //add the array values and store them in a variable
        for (i = 0; i < terms.length; i++) {
            if (typeof terms[i] == 'number') {
                sum += terms[i]
            } else {
                return res.status(400).json({ message: `${terms[i]} on index ${i} is not a number` })
            }
        }
        // apply the average formula, and store the result in a variable
        //mean= (sum of terms)/(number of terms)
        calculatedMean = (sum) / (terms.length)
        return res.status(200).json({ mean: calculatedMean, message: "ok" })
    }
    //response if input received is empty json
    return res.status(418).json({ message: "not enough values to be calculated" })
})

router.post('/median', (req, res) => {
    const { terms } = req.body
    if (undefined !== terms && terms.length > 1) {
        let sum = 0
        //check if terms are numbers
        for (i = 0; i < terms.length; i++) {
            if (typeof terms[i] == 'number') {
                
            } else {
                return res.status(400).json({ message: `${terms[i]} on index ${i} is not a number` })
            }
        }
    }
    return res.status(200).json({ median: 'calculatedMedian', message: `ok` })
})
router.post('/mode', (req, res) => {
    return res.status(200).json({ message: `mode` })
})

module.exports = router