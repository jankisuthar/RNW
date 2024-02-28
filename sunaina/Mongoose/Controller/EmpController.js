

const Employee= require("../Database/model")
const jwt=require('jsonwebtoken')

async function getAllEmp(){
  let employee=await Employee.find();
  return employee;
}

async function addEmp(data){
    console.log(data);
    let employee=await Employee.create({
        ...data
    })

    return employee;
    
}
async function updateEmp(id,data){
     await Employee.findByIdAndUpdate(id,{
        $set:{
            ...data
        }
       
     })
     let update=await Employee.findById(id);
     return update
}

async function deleteEmp(id){
    
     let deleteEmp=await Employee.findByIdAndDelete(id);
   return deleteEmp
}

let ui=(req,res)=>{
    console.log(req.cookies);
    res.render("index")
   
}
let getSignup=(req,res)=>{
   
    res.render("signup")
   
}

let Login=async(req,res)=>{
    let {username,password,email}=req.body;
    let user=await Employee.findOne({email:email})
    if(!user)
    {
       return res.send("user not found");
    }
    if(user.password != password)
    {
       return res.send("password not match");
    }
    if(user && user.password===password)
    {
        let payload={
              email:user.email,
              password:user.password,
              id:user.id
        }
        const token=jwt.sign(payload,"private key")
        console.log(token)
    }

    return res.send("success login")
}

const Local=(req,res)=>{
    res.send("logged")
}
const getLogin=(req,res)=>{
    res.render("Login")
}

const verifytoken=(req,res)=>{
    let data=req.headers.authorization.split("")[2];
    console.log(data)
    // let {token}=req.body;
    // let decoded=jwt.verify(token,"private key")
    // res.send(decoded)
}
module.exports={
    getAllEmp,addEmp,updateEmp,deleteEmp,ui,getSignup,Login,
    Local,getLogin,verifytoken
}