
const express = require('express')
const bodyparser = require('body-parser')

const router = require('./router/event')
const app = express()

app.use(bodyparser.json())
 
 // eslint-disable-next-line no-unused-vars
app.use('/',router )


app.listen(3000);