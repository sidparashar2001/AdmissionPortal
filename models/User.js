const mongoose =require('mongoose');
const jwt=require('jsonwebtoken')



//define Schema
const UserSchema =new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true,unique:true},
    role:{type:String, default:"user"},
    password:{type:String, required:true, trim:true},
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
   
},{timestamps:true})

UserSchema.methods.generateAuthToken=async function(){
    try{

        const pntoken=jwt.sign({_id:this._id.toString()},'siddharthparashar')
          // console.log(pntoken)
          this.tokens=this.tokens.concat({token:pntoken})
          await this.save()
          return pntoken


    }catch(err){
        console.log(err)
    }
}


const UserModel = mongoose.model('user',UserSchema);


module.exports = UserModel ; 