const mongoose = require("mongoose");
 mongoose.connect("mongodb://localhost:27017/crudejs");


const userSchema = mongoose.Schema({
    name: String,
    email:String,
    image:String
}) 

module.exports =  mongoose.model('users',userSchema);
