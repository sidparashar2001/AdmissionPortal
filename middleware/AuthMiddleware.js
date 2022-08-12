const jwt=require("jsonwebtoken")
const UserModel=require("../models/User.js")

const auth=async(req,res,next)=>{

    try{
        const token=req.cookies.jwt
        // console.log(token)
        const verifyUser=jwt.verify(token,'siddharthparashar')
        // console.log(verifyUser)
        const user=await UserModel.findOne({_id:verifyUser._id})
        // console.log(user)
        req.user=user
        next()
    }catch(err){
        // console.log(err)
        res.redirect('/')
    }


}

module.exports=auth