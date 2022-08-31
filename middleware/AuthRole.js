const jwt=require("jsonwebtoken")
const UserModel=require("../models/User.js")

const AuthRole=(roles)=>{
    return (req,res,next)=>{

        // console.log(req.user.role)
        if(!roles.includes(req.user.role)){
            return next(
                res.redirect("/index")
            )
            // res.redirect("/index")
        }
        next()
    }
}

module.exports=AuthRole