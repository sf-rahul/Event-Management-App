/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

router.get('/',(req,res,next)=>{

    return res.send("hey this is from router ")
})


module.exports = router;