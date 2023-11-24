const express = require("express")
const app = express();
const path = require("path")
const port = 8080;

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))



app.listen(port,()=>{
    console.log(`app listning on post : ${port}`);

})

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/rolldice",(req,res)=>{
    let diceValue = Math.floor(Math.random()*6)+1;
    res.render("rolldice",{diceValue});
})