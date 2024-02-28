
const mongoose=require('mongoose')
async function connectDatabase(){
    let result=await mongoose.connect("mongodb://localhost:27017/employeee")
    return result
}

module.exports=connectDatabase;