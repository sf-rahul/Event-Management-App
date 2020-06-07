const mongoose = require('mongoose')

const  Schema = mongoose.Schema;

const regSchema = new Schema({

         userId : {type:String , required:true},
         eventId:{type:String,required:true},
         name :{type:String , required:true},
         tickets:{type:Number,default:1},
         idcard:{type:String ,required:true}
            


 })


module.exports = mongoose.model('Registraton',regSchema)