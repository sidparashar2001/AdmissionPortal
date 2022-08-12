const express=require("express")
const UserController = require("../Controllers/UserController")
const IndexController = require("../Controllers/user/IndexController")
const auth = require("../middleware/AuthMiddleware")
const AdminController = require("../Controllers/AdminController")
const router=express.Router()

// Admin Controller
router.get("/admin/dashboard",auth,AdminController.dashboard)






//UserController
router.get("/",UserController.login)
router.get("/createuser",UserController.createuser)
router.post("/insertuser",UserController.insertuser)
router.post("/verify_login",UserController.verifyLogin)
router.get("/logout",UserController.logout)






// User-Index Controller
router.get("/index",auth,IndexController.index)
router.get("/btech",auth,IndexController.btech)
router.get("/bba",auth,IndexController.bba)
router.get("/barch",auth,IndexController.barch)

router.post("/register_student",IndexController.registerStudent)
router.get("/display_student",auth,IndexController.displayUser)
router.get("/view_student/:id",auth,IndexController.viewUser)
router.get("/edit_student/:id",auth,IndexController.editUser)
router.post("/update_student/:id",IndexController.updateUser)

module.exports=router