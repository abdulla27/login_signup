module.exports=(app,express,mysqlcon)=>{
    const router=express.Router()
    app.use("/",router)

    router.post("/delete",(req,res)=>{
      let stusername=req.body.data.username
      let stpassword=req.body.data.password
      mysqlcon.query("select * from user",(err,value)=>{
            if(err) throw err
            console.log({value});
            for(let i in value){
                  if(value[i].username===stusername && value[i].password===stpassword){
                  mysqlcon.query(`delete from user where username="${stusername}" and password="${stpassword}"`)
                  return res.send("your account deleted sucessfully.")

                  }
            }
            return res.send("incorrect username and password")
      })
})


}