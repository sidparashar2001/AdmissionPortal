const CourseModel=require("../models/Course")
const UserModel=require("../models/User")
class AdminController{

    static dashboard=async(req,res)=>{
        try{
            const result=await CourseModel.find()
            const {name,_id}=req.user
            res.render("admin/dashboard",{data:result,n:name,id:_id})
            
        }catch(err){
            console.log(err)
        }
    }

    static editUser=async(req,res)=>{
        try{
            const {name}=req.user
            const result= await CourseModel.findById(req.params.id)
            
        res.render("admin/editStudent",{data:result,n:name})
        }catch(err){

        }
    }

    static updateUser=async(req,res)=>{
        try{
            const result= await CourseModel.findByIdAndUpdate(req.params.id,req.body)
            await result.save()
            const pos=req.params.id
        // res.redirect("/view_student/:pos")
        res.redirect("/admin/dashboard")
        }catch(err){
            console.log(err)
        }
    }

    static editAdmin=async(req,res)=>{
        try{
            
            const result=await UserModel.findById(req.params.id)
            // console.log(result)
            res.render("admin/editAdmin",{data:result,message: req.flash("error")})
        
        }catch(err){
            console.log(err)
        }
    }


    static updateAdmin=async(req,res)=>{
       try{
            

        
        }catch(err){
            console.log(err)
        }
    }


    static updateStatus=async(req,res)=>{
        try{
            const {status}=req.body
            console.log(status)
            console.log(req.params.id)
            const result= await CourseModel.findByIdAndUpdate(req.params.id,{status})
            await result.save()
            res.redirect("/admin/dashboard")
        }
        catch(err){
            console.log(err)
        }
    }


    static deleteUser=async(req,res)=>{
        try{
            
            const result= await CourseModel.findByIdAndDelete(req.params.id)
            console.log(req.params.id)
            res.redirect("/admin/dashboard")    
        
        }catch(err){
            console.log(err)
        }
    }




}

module.exports=AdminController