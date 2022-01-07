const express=require("express")
const fs = require('fs');

const app=express()

app.use(express.static("Data"))


app.get("/",function(req,res){
    res.sendFile(__dirname+("/index.html"))
})
app.get("/users",function(req,res){

    res.sendFile(__dirname+"/users.html")

})
app.post("/signup",function(req,res){
    res.sendFile(__dirname+"/signup.html")
})

app.get("/users-data",function(req,res){
    let jdata = fs.readFileSync('user.json');
    let users = JSON.parse(jdata);

    res.send(users)
})


app.listen(4000,function(){
    console.log("Server Run on 4000 Port");
})