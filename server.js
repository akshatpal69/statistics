const { Router } = require('express')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000
const host = 'localhost'
app.use(express.json())

var morgan = require("morgan")
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))

const mmmRouter  = require('./routes/mmmRouter')
app.use('/api/mmm', mmmRouter)

const home  = require('./routes/home')
app.use('/', home)


app.listen(port, () => {
  console.log(`app listening on http://${host}:${port}`)
})