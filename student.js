const express=require("express")
const router=new express.Router()

router.get("/all",(req,res)=>{
    res.send("all students")
})

router.post("/create",(req,res)=>{
    res.send("create students")
})

router.put("/update",(req,res)=>{
    res.send("update students")
})

router.delete("/delete",(req,res)=>{
    res.send("delete students")
})

module.exports=router
// export default router;
