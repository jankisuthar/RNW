const mongoose=require('mongoose')

let Employee=mongoose.model('Emp',{
    username:String,
    password:String,
     email:String
    
})
module.exports=Employee