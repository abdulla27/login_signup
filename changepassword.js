module.exports=(app,express,mysqlcon)=>{
    const router=express.Router()
    app.use("/",router)

    router.post("/password",async(req,res)=>{
      let stusername=req.body.data.username;
      let stpassword=req.body.data.password;


       mysqlcon.query("select * from user",(err,value)=>{
         console.log({value});
            if(!stusername){return res.send("username required")}
            if(!stpassword){return res.send("password required")}
            for (let i in value){
                        if (value[i].username===stusername){
                              // value.splice(i,1,req.body.data)8
       mysqlcon.query(`update user set password="${stpassword}" where username="${stusername}"`,(err,value)=>{
            console.log({err});
            if(!err){
                  return res.send("congratulations your password changed successfully")
                  
            }
            else{
                  return res.send("something went wrong");
            }
            
      })
      return;
}}
return res.send("username different");
      
      })
})


}