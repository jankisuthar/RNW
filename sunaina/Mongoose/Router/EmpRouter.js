
const express=require('express');
const { getAllEmp, addEmp, updateEmp, deleteEmp, ui, getSignup, Login, Local, getLogin, verifytoken } = require('../Controller/EmpController');
const { findByIdAndDelete } = require('../Database/model');
const passport = require('passport');
const upload = require('../util/uploadfile');

const router=express.Router();


router.get("/emp",async(req,res)=>{
    let employee=await getAllEmp();
     res.cookie("name","data").send(employee)
    console.log(req.cookies.name)
})


router.post("/emp",async(req,res)=>{
   // console.log("jjj",req.body)
    let employee=await addEmp({
        email:req.body.email,
        password:req.body.password,
      
    });
   
    return res.send({
        data:employee
    })
})

router.patch("/emp/:id",async(req,res)=>{

    let employee=await updateEmp(req.params.id,req.body);
   
    return res.send({
        data:employee
    })
})

router.delete("/emp/:id",async(req,res)=>{
   try {
    let employee=await deleteEmp(req.params.id);
   
    return res.send({
        data:employee
    })
   } catch (error) {
      return res.status(404).send({
        msg:"unexpected"
      })
   }
   
})

router.get("/",ui)
router.get("/signup",getSignup)
router.get("/login",getLogin)
router.post("/login",Login)
router.post("/token",verifytoken)
router.post("/local",passport.authenticate("local"),Local)

module.exports=router