const mongoose = require("mongoose");

let Employee = mongoose.model("Emp", {
  username: String,
  gender: String,
  profile1: [],
  profile2: [],
});
module.exports = Employee;
