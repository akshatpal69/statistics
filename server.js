const { Router } = require('express')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000
const host = '0.0.0.0'
app.use(express.json())

var morgan = require("morgan")
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))

const mmmRouter  = require('./routes/mmmRouter')
app.use('/api/mmm', mmmRouter)



app.listen(port, () => {
  console.log(`app listening on http://${host}:${port}`)
})