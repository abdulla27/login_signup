module.exports=(app,express,mysqlcon)=>{
    const router=express.Router()
    app.use("/",router)
    router.post("/login",(req,res)=>{
        let stusername=req.body.data.username
        let stpassword=req.body.data.password
          mysqlcon.query("select * from user",(err,value)=>{
                    if(err){console.log(err)}
                    else{console.log({value})};
                    for(let i in value){
                            if(value[i].username===stusername){
                            if(value[i].password===stpassword){return res.send("you logged in sucessfully.")}
                                        else{return res.send("wrong password.")};
                                      }
                                      
                                }
                                return res.send("username different.")
                          })
                                
                                
                          })
                }
            
        
    











