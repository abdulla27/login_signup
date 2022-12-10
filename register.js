// const express=require("express")
// const app=express()
// const mysqlcon=require("./demo")
// app.use(express.json())

// app.post("/register",(req,res)=>{
//     let stusername=req.body.data.username
//     let stpassword=req.body.data.stpassword

//     mysqlcon.query("select * from user",(err,value)=>{
//         if (err) throw err
//         else{console.log({value});}
        
//         for(let i in value){
//             if(value[i].username===stusername){return res.send("username already exists.")}
//         }

//         mysqlcon.query(`insert into user (username,password) values ("${stusername}","${stpassword}")`,(err,results)=>{
//             if(err) throw err
//             console.log("data added");
//         })
//         res.send("you are registered sucessfully.")
//     })
// })
// app.listen(4000,()=>{console.log("listening the port 4000");})














// const express=require("express")10kb
// const router=express.Router()

// ram(3,5)s
// const mysqlcon=require("./demo")
// app.use(express.json())
module.exports=(app,express,mysqlcon)=>{
    const router=express.Router()
    app.use("/",router)
router.post("/register",(req,res)=>{
    console.log(req);
      let stusername=req.body.data.username
      let stpassword=req.body.data.password
      mysqlcon.query("select * from user",(err,value)=>{
            if(err) throw err
            else{console.log({value});}
            for(let i in value){
                  if(value[i].username===stusername){return res.send("username already exists")}
}
            mysqlcon.query(`insert into user (username,password) values ("${stusername}","${stpassword}")`,(err,results)=>{
                        if(err) throw err
                        console.log("data added.");
            })
            res.send("you are registered sucessfully.")

      })
})
}
// module.exports=router