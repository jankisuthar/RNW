const express=require('express')
const employeeRouter=require("./Router/EmpRouter");
const connectDatabase=require("./Database/db")
const cookie=require("cookie-parser");
const passport=require("passport");
const session=require("express-session");
const LocalAuth = require('./middleware/LocalAuth');
const app=express();
app.use(session({secret:"private key"}))
app.use(express.json())
app.use(cookie());
LocalAuth(passport)
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({extended:true}))
app.use('/',employeeRouter)

app.set("view engine","ejs");
app.set("views",__dirname+"/view")
app.use(express.static(__dirname+"/Public"))

connectDatabase().then(()=>{
    app.listen(7890,()=>{
        console.log("server listening")
     })
})
