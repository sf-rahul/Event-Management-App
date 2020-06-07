/* eslint-disable no-unused-vars */
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    
       eventId:{type:String,required:true},
       name:{type:String,required:true},
       type:{type:String,default:'offline'},
       price:[{type:Number,required:true}],
       venue:{type:String,required:true},
       date: { 
            from:{type:Date, default:Date()},
            to:{type:Date,default:Date()}
         },
       organsed_by:[{type:Schema.Types.ObjectId,ref:'User'}],
       attendies:[{type:Schema.Types.ObjectId,ref:'User'}]
        
})

module.exports = mongoose.model('Event',eventSchema);