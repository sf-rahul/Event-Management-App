const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let userSchema = new Schema({

        email:{type:String,required:true},
        password:{type:String,required:true},
        name:{type:String,required:true},
        registration:[{type:Schema.Types.ObjectId, ref:'Registraton'}],
        organizing:[{type:Schema.Types.ObjectId,ref:'Event'}]


})


module.exports = mongoose.model('User',userSchema);