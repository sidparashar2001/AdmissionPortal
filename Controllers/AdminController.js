const CourseModel=require("../models/Course")
class AdminController{

    static dashboard=async(req,res)=>{
        try{
            const result=await CourseModel.find()
            const {name}=req.user
            res.render("admin/dashboard",{data:result,n:name})
        }catch(err){
            console.log(err)
        }
    }

}

module.exports=AdminController