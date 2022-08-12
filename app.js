const express =require("express")
const connectDB = require("./db/connect_db.js")
const app=express()

const flash=require("connect-flash")
const session=require("express-session")
const cookieParser = require('cookie-parser')

const port=process.env.PORT || 3000
const web=require("./routes/web.js")
const bodyParser=require("body-parser")

connectDB()


app.use(bodyParser.urlencoded({extended:false}))

app.use(cookieParser())

app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    
  }));
  
  app.use(flash());




app.use("/",web)

app.set("view engine","ejs")

app.use(express.static("public"))


app.listen(port,()=>{
    console.log(`Server Started on localhost:${port}`)
})