const express = require('express');
const usermodel = require("./model/user")
const app = express();
const path = require('path');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req,res){
    res.render("index");
});

app.post('/create', async function(req,res){
    let {name,email,image} = req.body
   let createduser = await usermodel.create({
        name,
        email,
        image
    })
    res.redirect("/read");
});
app.get('/read',async function(req,res){
    let allusers = await usermodel.find();
    res.render("read",{users:allusers});
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`);
})

