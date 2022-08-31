const express=require("express")
const UserController = require("../Controllers/UserController")
const IndexController = require("../Controllers/user/IndexController")
const auth = require("../middleware/AuthMiddleware")
const AuthRole = require("../middleware/AuthRole")
const AdminController = require("../Controllers/AdminController")

const router=express.Router()


// Admin Controller
router.get("/admin/dashboard",auth,AuthRole("admin"),AdminController.dashboard)
router.get("/delete_student/:id",AdminController.deleteUser)
router.get("/admin/edit_student/:id",auth,AdminController.editUser)
router.post("/admin/update_student/:id",auth,AdminController.updateUser)

router.get("/admin/edit/:id",auth,AdminController.editAdmin)
router.post("/admin/update/:id",AdminController.updateAdmin)
router.post("/admin/update_status/:id",AdminController.updateStatus)






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