const mongooose = require('mongoose');

const Schema=mongooose.Schema;

const exerciseSchema=new Schema(
{
    username:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
},
{
    timestamps:true,
});

const Exercise=mongooose.model('Exercise',exerciseSchema);
module.exports=Exercise;