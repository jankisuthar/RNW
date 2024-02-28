

const Employee= require("../Database/model")

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
module.exports={
    getAllEmp,addEmp,updateEmp,deleteEmp,ui
}