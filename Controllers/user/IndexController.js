const CourseModel=require("../../models/Course.js")
class IndexController{
    static index=async(req,res)=>{
        const {name,_id}=req.user
        const data1=await CourseModel.findOne({user_id:_id,courses:"Btech"})
        const data2=await CourseModel.findOne({user_id:_id,courses:"BBA"})
        const data3=await CourseModel.findOne({user_id:_id,courses:"B.Arch"})
        res.render("index/index",{n:name,d1:data1,d2:data2,d3:data3})
    }
    
    static btech=(req,res)=>{
        const {_id,name,email}=req.user
        res.render("courses/btech",{n:name,e:email,id:_id})
    }
    static bba=(req,res)=>{
        const {_id,name,email}=req.user
        res.render("courses/bba",{n:name,e:email,id:_id})
    }
    static barch=(req,res)=>{
        const {name}=req.user
        res.render("courses/barch",{n:name})
    }


    static register=(req,res)=>{
        res.render("index/register")
    }

    static registerStudent=async(req,res)=>{
       try{
        // console.log(req.body)
       const result =new CourseModel({
        name:req.body.name,
        email:req.body.email,
        phoneno:req.body.phoneno,
        address:req.body.address,
        gender:req.body.gender,
        college:req.body.college,
        courses:req.body.courses,
        branch:req.body.branch,
        user_id:req.body.user_id
       })
        await result.save()
        res.redirect("/display_student")
       }catch(err){
        console.log(err)
       }
    }
    static displayUser=async(req,res)=>{
        try{
            // const courseName=await CourseModel.find()
            const result= await CourseModel.find()
            // console.log(result)
            const {name}=req.user
        res.render("index/display",{data:result,n:name})
        }catch(err){

        }
    }
    static viewUser=async(req,res)=>{
        try{
            const {name}=req.user
            const result= await CourseModel.findById(req.params.id)
            
        res.render("index/ViewStudent",{data:result,n:name})
        }catch(err){

        }
    }
    static editUser=async(req,res)=>{
        try{
            const {name}=req.user
            const result= await CourseModel.findById(req.params.id)
            
        res.render("index/edit",{data:result,n:name})
        }catch(err){

        }
    }
    static updateUser=async(req,res)=>{
        try{
            const result= await CourseModel.findByIdAndUpdate(req.params.id,req.body)
            await result.save()
            const pos=req.params.id
        // res.redirect("/view_student/:pos")
        res.redirect("/display_student")
        }catch(err){
            console.log(err)
        }
    }


}
 module.exports=IndexController