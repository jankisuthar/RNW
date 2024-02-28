const Employee = require("../Database/model");

const LocalStrategy=require("passport-local").Strategy

const LocalAuth=(passport)=>{
    passport.use(new LocalStrategy(async(username, password, done)=>{
    let user=await  Employee.findOne({username:username})
    if(!user)
    {
       return done(null,false,{message:"user not found"});
    }
    if(user.password != password)
    {
       return done(null,user,{message:"password"});
    }
    
    return done(null,user)
        
    

    }
      ));


      passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        Employee.findById(id, function (err, user) {
          done(err, user);
        });
      });

}
module.exports=LocalAuth

