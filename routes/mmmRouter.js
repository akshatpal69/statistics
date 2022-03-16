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
    let { terms } = req.body
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
    //copy the array sent to a variable
    let { terms } = req.body
    //check if there are valid values in array
    if (undefined !== terms && terms.length > 1) {
        console.log(`data received is: ${terms}`)
        //sort the array
        terms.sort(function(a, b){return a - b});
        console.log(`sorted data is: ${terms}`)
        //divide the array in two parts
        let sum = 0
        sum = terms.length%2
        console.log(`value of sum is: ${sum}`)
        //for (i = 0; i < terms.length; i++) {
            //if (typeof terms[i] == 'number') {
                if(sum%2==0){
                    calculatedMedian = ( (terms[(terms.length/2)-1] ) + ( terms[(terms.length/2)] )) / 2
                    console.log(`number of terms are: ${terms.length}`)
                    console.log(`termsLength/2-1: `+terms[(terms.length/2)-1])
                    console.log(`termsLength/2: `+terms[(terms.length/2)])
                    return res.status(200).json({ median: calculatedMedian, message: "okeven" })
                }
                else{
                    console.log(`number of terms are: ${terms.length}`)
                    console.log(`termsLength/2-1: `+terms[Math.ceil(terms.length/2)-1])
                    calculatedMedian = terms[Math.ceil(terms.length/2)-1]
                    return res.status(200).json({ median: calculatedMedian, message: "okodd" })
                }
           // } else {
                return res.status(400).json({ message: `${terms[i]} on index ${i} is not a number` })
           // }
        //}
    }
    return res.status(200).json({ median: 'calculatedMedian', message: `ok` })
})
router.post('/mode', (req, res) => {
    return res.status(200).json({ message: `mode` })
})

module.exports = router