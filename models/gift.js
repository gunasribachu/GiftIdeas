const mongoose = require("mongoose");
const giftSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        min:1,
        max:100000
    },
    occasion:{
        type:String,
        enum:["birthday","festival","wedding","other"],
        default:"other"
    },
    bought:{
        type:Boolean,
        default:false
    },
    giftDate:{
        type:Date,
        required:false
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Gift",giftSchema)