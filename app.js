const express=require("express")
const app=express()
const mysqlcon=require("./demo")
app.use(express.json())

// app.use(require(regoter))
require("./register")(app,express,mysqlcon)
require("./login")(app,express,mysqlcon)
require("./changepassword")(app,express,mysqlcon)
require("./delete")(app,express,mysqlcon)


app.listen(4000,()=>{console.log("listening the port 4000")})
