const express = require("express")
const { format } = require("path")
const app = express()
const path = require("path")

app.listen(3000,"localhost", () => console.log("El servidor está corriendo"))

app.get("/", function(req,res){
    let file = path.resolve("vistas/index.html")
    res.sendFile(file)
})

app.post("/", function(req,res){
    let file = path.resolve("vistas/index.html")
    res.sendFile(file)
})

app.get("/register", function(req,res){
    let file = path.resolve("vistas/register.html")
    res.sendFile(file)
})

app.get("/log-in", function(req,res){
    let file = path.resolve("vistas/log-in.html")
    res.sendFile(file)
})
/*
app.get("*", function(req,res){
    if(req.url.endsWith(".css")){
        let file = path.resolve("public/styles" + req.url)
        return res.sendFile(file)
    }

    let formats = ["jpg", "svg"]
    let ext = req.url.split(".")[1]

    if(formats.includes(ext)){
        let file = path.resolve("public/images" + req.url)
        return res.sendFile(file)
    }
    return res.send("Not Found")
})
*/

app.get("*", function(req,res){
    if(req.url.includes(".")){
        let file = path.resolve("public" + req.url)
        return res.sendFile(file)
    }

    res.send("Not Found")
})