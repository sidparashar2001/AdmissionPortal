const mongoose =require('mongoose');

//define Schema
const CourseSchema =new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    phoneno:{type:Number, required:true, trim:true},
    address:{type:String, required:true, trim:true},
    gender:{type:String, required:true, trim:true},
    college:{type:String, required:true, trim:true},
    courses:{type:String, required:true, trim:true},
    branch:{type:String, required:true, trim:true},
    user_id:{type:String, required:true, trim:true},
    status:{type:String, default:"Pending"}   
},{timestamps:true})


const CourseModel = mongoose.model('course',CourseSchema);


module.exports = CourseModel ; 