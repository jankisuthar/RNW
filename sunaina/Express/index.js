const express=require('express');
const { getAllEmp, addEmp } = require('./emp');

const app=express();
app.use(express.json())

app.get("/emp",async(req,res)=>{
    const employee=await getAllEmp();
    return res.send({
        data:employee
    })

})
app.post("/emp",async(req,res)=>{
    const employee=await addEmp(req.body);
    console.log("employee////")
    console.log(employee);
    return res.send({
        data:employee
    })
    

})



app.listen(7777,()=>{
    console.log("server connecting");
})