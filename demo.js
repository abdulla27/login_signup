var mysql=require("mysql")
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Surajsah@97",
    database:"abdulla"
});



connection.connect(function(error){
    if(error) throw error;
    console.log("connected");
    // connection.query(`insert into students values "${req.body}"`,(err,value)=>{
    //     if(err) throw err;
    //     console.log("all values are here",value[0].name)
    })

module.exports=connection;

