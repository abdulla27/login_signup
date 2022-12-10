
   //// node js
   // first we use sync method

// const fs=require("fs")
// //how to create file
// fs.writeFileSync("read.txt","hello")
// fs.appendFileSync("read.txt"," everyone")
// //how to read file
// const bufdata=fs.readFileSync("read.txt")
// console.log(bufdata)
// const originaldata=bufdata.toString()
// console.log(originaldata)
// //how to rename the file
// fs.renameSync("read.txt","read1.txt")
// //how to make folder
// fs.mkdirSync("thapa")
// //how to delete folder
// fs.rmdirSync("thapa")
// //how to delete file
// fs.unlinkSync("read1.txt")

   // now we use async method
// //how to create file 
// fs.writeFile("read2.txt","dil de diya hai jaan tumhe denge",(err)=>{console.log("file creadted")
// console.log(err)})//(ye jo console.log(err)likha hai ager koi error hota hai to ye hme error bta deta.)
// // // how to add data in same file
// fs.appendFile("read2.txt","dga nhi karenge sanam",(err)=>{console.log(" data append successfully")})
// // //how to read file 
// fs.readFile("read2.txt","utf-8",(err,data)=>{console.log(data)})
// // //how to delete file
// fs.unlink("raed2.txt",(err)=>{console.log("file deleted successfully")})

//////// os module
// const os=require("os")
// console.log(os.arch()) //(it bit of the system like 32 bit or 64 bit)

// const freemem=os.freemem()
// console.log(`${freemem/1024/1024/1024} GB`) //(it gives free memory available in the system in GB)

// const totalmem=os.totalmem() //(it gives total memory avaialable in the system)
// console.log(`${totalmem/1024/1024/1024} GB`)

// //// another os methods
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.tmpdir())
// console.log(os.type())


   //// path module
// const path=require("path")
// console.log(path.dirname("\home\surajsah97\Desktop\abdulla\flipkart\revision\revision.js\revision1.js"))
// console.log(path.extname("\home\surajsah97\Desktop\abdulla\flipkart\revision\revision.js\revision1.js"))
// console.log(path.basename("\home\surajsah97\Desktop\abdulla\flipkart\revision\revision.js\revision1.js"))
// console.log(path.parse("\home\surajsah97\Desktop\abdulla\flipkart\revision\revision.js\revision1.js"))

// const a=(path.parse("\home\surajsah97\Desktop\abdulla\flipkart\revision\revision.js\revision1.js"))
// const b=a.name //(in this we use object property because parse method gives an object so if we need only name then we will use object dot method like (a.name) it gives only name.)
// console.log(b)

//////// how to create and export our own module
//// firstly we make an another file (oper.js) through which exports the functions

// const e=require("./oper")
// console.log(e.a(5,5))
// console.log(e.b(5,5))
// console.log(e.c(5,5))
// console.log(e.d)

//// another way and best way to export
// const{add,sub,mult,name}=e
// console.log(add(5,5))
// console.log(sub(5,5))
// console.log(mult(5,5))
// console.log(name)

//// IIFE(immediately involked function expression)(isme kuch nhi hai bus system ke bsckside me iife work karta hai like below)
   ////normal function 
// function vinod(){
//     console.log("hello vinod")
// }
// vinod()
    //// IIFE function
// (function (){
//     console.log("hello vinod")
// })
// ()
        ////or
// (function(a){console.log(a)})
// ("hello vinod")

      //////// how to create our own web server in node.js
// const http=require("http")
// const server=http.createServer((req,res)=>{res.end("<h1>please tell your faveroute song</h1>")})
// server.listen(8000,"127.0.0.1",()=>{console.log("listening the port 8000")})
      ////routing handled http request
// const http=require("http")
// const server=http.createServer((req,res)=>{
//    // console.log(req.url)
// if (req.url=="/"){res.end("<h1>hello from the home sides.</h1>");}
// else if(req.url=="/about"){res.end("hello from the about sides.")}
// else if(req.url=="/contact"){res.end("hello from the contact sides.")}
// else{res.writeHead(404,{"contant-type":"text/html"})}
// res.end("<h1>404 error page does not found </h1>")

// })

// server.listen(8000,"127.0.0.1",()=>{console.log("listnening the port")})

      ////JSON(javascript object notation)
// // how to convert object into json
// const objectdata={name:"vinod",
//                age:26,
//                channel:"thapa tecnical"}
// const jsondata=JSON.stringify(objectdata) //(this is called stringyfy method)
// console.log(`this is json data = ${jsondata}`)
// // how to convert json into object
// const convertobject=JSON.parse(jsondata)
// console.log("this is object data = ",convertobject)   //(this is called parse method and note that  json ke ander template string work nhi karti hai like above.)

      //// how to create simple api(aplication programming interface)

      ////(****first try)
// const http=require("http")
// const fs=require("fs")

// const server=http.createServer((req,res)=>{
//    if (req.url=="/"){res.end("<h1>hello from the home page</h1>")}
//    else if(req.url=="/about"){res.end("<h1>hello from the about page</h1>")}
//    else if(req.url=="/userapi"){
//       fs.readFile(`../read1.txt`,"utf-8",(err,data)=>{console.log(data);res.end(`<h1>${data}</h1>`)})
      
//    }
//       else{
//          res.writeHead(404,{"content-type":"text/html"})
//          res.end("404 error page. page does not find")
//       }

// })

// server.listen(8000,"127.0.0.1",()=>{console.log("listening the port no. 8000")})

            //// (****second try)
// const http=require("http")
// const fs=require("fs")

// const server=http.createServer((req,res)=>{
//    if (req.url=="/"){res.end(console.log("hello from the home page"))}
//    else if(req.url=="/about"){res.end(console.log("<h1>hello from the about page</h1>"))}
//    else if(req.url=="/userapi"){
//       fs.readFile(`../read1.txt`,"utf-8",(err,data)=>{console.log(data);res.end(data)})
      
//    }
//       else{
//          res.writeHead(404,{"content-type":"text/html"})
//          res.end("404 error page. page does not find")
//       }

// })

// server.listen(8000,"127.0.0.1",()=>{console.log("listening the port no. 8000")})

            //// (**** third try)
// const http=require ("http")
// const fs=require("fs")

// const server=http.createServer((req,res)=>{
//    if (req.url=="/"){res.end("hello from home side")}
//    else if (req.url=="/about"){res.end("hello from about side")}
//    else if (req.url=="/userapi"){fs.readFile(`./read2.txt`,"utf-8",(err,data)=>{
//       console.log(err);
//       console.log(data);
//       const objdata=JSON.parse(data)
//       res.end(objdata[0].name)
      
//    })}
//    else{res.writeHead(404,{"content-type":"text/html"})
// res.end("404 error page does not found")}
// })

// server.listen(8000,"127.0.0.1",()=>{console.log("listening the port no. 8000")})


      //// best way for making api(**** kahi galti ho rhi hai suraj se puchna hai)
// const http=require("http")
// const fs=require("fs")

// const server=http.createServer((req,res)=>{
// const data=fs.readFileSync(`./read2.txt`,"utf-8")
// const objdata=JSON.parse(data)
// if (req.url=="/"){res.end("hello home")}
// else if(req.url=="/about"){res.end("hello about")}
// else if(req.url=="/userapi"){res.writeHead(200,{"content-type":"application/json"})
//                               res.end(objdata)}
// else{res.writeHead(404,{"content-type":"text/html"})
//    res.end("<h1>404, error page. page does not found</h1>")})}

// http.Server.listen(8000,"127.0.0.1",()=>{console.log("listening the port no. 8000")})


                  //////// events module
// const EventEmitter=require("events")
// const event=new EventEmitter()
// event.on("saymyname",()=>{console.log("my name is vinod")})
// event.emit("saymyname")

                  //// (mutiple function bhi call kar sakte hai)
// const EventEmitter=require("events")
// const event=new EventEmitter()
// event.on("saymyname",()=>{console.log("my name is vinod")})
// event.on("saymyname",()=>{console.log("my name is thapa")})

// event.emit("saymyname")

                  //// (registering for the event with callback parameters)
// const EventEmitter=require("events")
// const event=new EventEmitter()
// event.on("checkpage",(a,b)=>{console.log(`my name is ${a} and my age is ${b}.`)})
// event.emit("checkpage","rashid",17)

                  ////(****streaming in nodejs)

// const fs=require("fs")
// const http=require("http")
// const server=http.createServer()
// server.on("request",(req,res)=>{
//       const rstream=fs.createReadStream(`./read2.txt`)
//       rstream.on("data",(chunkdata)=>{res.write(chunkdata)})
//       rstream.on("end",()=>{res.end()})
//       rstream.on("error",(err)=>{console.log(err)})
//       res.end("file not found")
// })

// server.listen(8000,"127.0.0.1")


            ////(****another way and this is the best way and this is called pipe event)
// const fs=require("fs")
// const http=require("http")
// const server=http.createServer()
// server.on("request",(req,res)=>{
//       const rstream=fs.createReadStream(`../read1.txt`)
//       rstream.pipe(res)})

// server.listen(8000,"127.0.0.1")

// const fs=require("fs")
// const http=require("http")
// const server=http.createServer()
// server.on("request",(req,res)=>{
//       const rstream=fs.createReadStream(`./read2.txt`) ////(****important note = agar file same folder me hai jaise ki (read2.txt) to ./ use karte hai aur agar file alag folder me hai jaise ki (read1.txt) to ../ use karte hai.)
//       rstream.pipe(res)
// })

// server.listen(8000,"127.0.0.1")







                  //////// express.js
// const express=require("express")
// const app=express()
// app.get("/",(req,res)=>{res.send("hello from home side")})
// app.get("/about",(req,res)=>{res.send("hello from the about side")})

// app.listen(8000,()=>{console.log("listening the porst no. 8000")})

      //// how to send html and json data as response using express
// const express=require("express")
// const app=express()

// app.get("/",(req,res)=>{
//       res.send("<h1>hello home2</h1>")})
// app.get("/about",(req,res)=>{
//       res.write("<h1>hello about</h1>")
//       res.write("<h1>hello again about</h1>")
//       res.send()})
// app.get("/temp",(req,res)=>{res.json({id:1,name:"vinod"})})
// app.listen(4000,"127.0.0.1",()=>{console.log("listening the port no. 4000")})



                        /////(*****ye main wala hai)
// const fs=require("fs")
// const express=require("express")
// const app=express()
// // const bodyparser=require("body-parser")////(****)
// // app.use(bodyparser.json())////(****)
//             ////or (ya bodyparser use karo ya express.json use karo baat ek hi hai)
// app.use(express.json())
// app.get("/",(req,res)=>{
//       console.log(req.body)
//       fs.writeFile("abc.json","hello",(err,data)=>{
//             console.log(err,data);
//       })
//       res.send("hello get")})
// app.post("/",(req,res)=>{
//       try{
//             fs.readFile("abc.json","utf-8",(err,data)=>{
//                   console.log(JSON.parse(data));  
//                   data=JSON.parse(data) 
//                   data.push(req.body)
//                   fs.writeFile("abc.json",JSON.stringify(data),((err,value)=>{
//                         console.log(value);
//                   }))

//             })
//             console.log(data)
//       }
//       catch(err){
           
//             fs.writeFile("abc.json",`[${JSON.stringify(req.body)}]`,(err,data)=>{
//                   if(err){console.log("file not created")}
//                   else if(!err){console.log("file created")}
//             })
//       }
     
//       res.send("I am post method")})
// app.listen(4000,"127.0.0.1",()=>{console.log("listening the port no. 4000")})





















// const fs=require("fs")
// const express=require("express")
// const app=express()
// const bodyparser=require("body-parser")////(****)
// app.use(bodyparser.json())////(****)
// //             ////or (ya bodyparser use karo ya express.json use karo baat ek hi hai)
// // app.use(express.json())
// app.get("/",(req,res)=>{
//       // console.log(req.body)
//       // fs.writeFile("abc.json","hello",(err,data)=>{
//       //       console.log(err,data);
//       // })
//       res.send("hello get")})
// app.post("/",(req,res)=>{
//       try{
//             fs.readFile("abc.json",(data,err)=>{
//                   // data.push(req.body)
//                   console.log({err});
//                   if(!err){
//                   fs.writeFile("abc.json",data,(err,data)=>{
//                         console.log(err,data);
//                   })
//             }
//             })
//       }
//       catch(err){
           
//             fs.writeFile("abc.json",`[${JSON.stringify(req.body)}]`,(err,data)=>{
//                   console.log(err,data);
//             })
//       }
     
//       res.send("I am post method")})
// app.listen(4000,"127.0.0.1",()=>{console.log("listening the port no. 4000")})














// const express=require("express")
// const app=express()
// const bodyparser=require("body-parser")

// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded())

// app.post("/person",(req,res)=>{
//       let personname=req.body.name
//       let age=req.body.age
//       res.send(req.body)
//       console.log(req.body)
// })
// app.listen(3000,()=>{console.log("listening the port 3000")})












// const fs=require("fs")
// const express=require("express")
// const app=express()
// const bodyparser=require("body-parser")////(****)
// app.use(bodyparser.json())////(****)
            ////or (ya bodyparser use karo ya express.json use karo baat ek hi hai)
// app.use(express.json())
// app.get("/",(req,res)=>{
//       console.log(req.body)
//       fs.writeFile("abc.json","hello",(err,data)=>{
//             console.log(err,data);
//       })
//       res.send("hello get")})
// app.post("/register",(req,res)=>{
//       try{
//           let a=fs.readFileSync("abc.json","utf-8");
//             a=JSON.parse(a)
//             for(i=0,i<a.length,i++){//0,9,10,,9+1===10
//                   if(a[i].username===req.body.username){
//                         if(a[i].password==req.body.password){
//                               return res.send("already exist ")
//                         }
//                         else{
//                               a.splice(a[i],1,req.body);
//                               //write
//                               return res.send("successfully password")
                              
//                         }
//                   }
//                   else if(i+1===a.length){//1+1==10 false
// a.push(req.body)
// //writefile
// return res.body("successfully created")
//                   }

//             }
//             a.push(req.body)  
//            let b= fs.writeFileSync("abc.json",JSON.stringify(a));
//            console.log({b});
//       }

//             // let a=fs.readFileSync("abc.json","utf-8");
//             // a=JSON.parse(a)
//             // a.push(req.body)
//             // console.log({a});
//             // fs.readFile("abc.json",(err,data)=>{
//             //       if(!err){
//             //       console.log(JSON.parse(data),"<<<<<<<<<<<<<<<<<<");  //[{},{},{}]
//             //       let a=JSON.parse(data) //a[0]
//             //       a.push(req.body)
                  
                  
//             //       fs.writeFile("abc.json",JSON.stringify(a),((err,value)=>{
//             //             if(!err){
//             //             console.log(value)}
//             //             ;}))
//             //             }

//             //             else{
                              
//             //                   fs.writeFile("abc.json",`[${JSON.stringify(req.body)}]`,((err,value)=>{
//             //                         if(!err){
//             //                         console.log(value)}
//             //                         ;}))
//             //             }
//             // })
//             // console.log(data)
//       // }
//       catch(err){
//             console.log({err});
//             let b=fs.writeFileSync("abc.json",`[${JSON.stringify(req.body)}]`)
//             console.log({b});
//       }
           
//       //       fs.writeFile("abc.json",`[${JSON.stringify(req.body)}]`,(err,data)=>{
//       //             if(err){console.log("file not created")}
//       //             else if(!err){console.log("file created")}
//       //       })
//       // }
     
//       res.send("I am post method")})
// app.listen(4000,"127.0.0.1",()=>{console.log("listening the port no. 4000")})







// const fs=require("fs")
// const express=require("express")
// const app=express()

// app.use(express.json())
// app.get("/",(req,res)=>{
//       console.log(req.body)
//       fs.writeFile("abc.json","hello",(err,data)=>{
//             console.log(err,data);
//       })
//       res.send("hello get")})
// app.post("/register",(req,res)=>{
//       try{
//           let a=fs.readFileSync("abc.json","utf-8");
//             a=JSON.parse(a)
//             for(i=0,i<a.length,i++){//0,9,10,,9+1===10
//                   if(a[i].username===req.body.username){
//                         if(a[i].password==req.body.password){
//                               return res.send("already exist ")
//                         }
//                         else{
//                               a.splice(a[i],1,req.body);
//                               //write
//                               return res.send("successfully password")
                              
//                         }
//                   }
//                   else if(i+1===a.length){//1+1==10 false
// a.push(req.body)
// //writefile
// return res.body("successfully created")
//                   }

//             }
//             a.push(req.body)  
//            let b= fs.writeFileSync("abc.json",JSON.stringify(a));
//            console.log({b});
//       }

//             // let a=fs.readFileSync("abc.json","utf-8");
//             // a=JSON.parse(a)
//             // a.push(req.body)
            // console.log({a});

// app.post("/",(req,res)=>{

//             fs.readFile("abc.json",(err,data)=>{
//                   if(!err){
//                   console.log(JSON.parse(data),"<<<<<<<<<<<<<<<<<<");  //[{},{},{}]
//                   let a=JSON.parse(data) //a[0]
//                   a.push(req.body)
                  
                  
//                   fs.writeFile("abc.json",JSON.stringify(a),((err,value)=>{
//                         if(!err){
//                         console.log(value)}
//                         ;}))
//                         }

//                         else{
                              
//                               fs.writeFile("abc.json",`[${JSON.stringify(req.body)}]`,((err,value)=>{
//                                     if(!err){
//                                     console.log(value)}
//                                     ;}))
//                         }
//             })
//             // console.log(data)
//       res.send("I am post method")

//       })
//       catch(err){
//             console.log({err});
//             let b=fs.writeFileSync("abc.json",`[${JSON.stringify(req.body)}]`)
//             console.log({b});
//       }
           
//       //       fs.writeFile("abc.json",`[${JSON.stringify(req.body)}]`,(err,data)=>{
//       //             if(err){console.log("file not created")}
//       //             else if(!err){console.log("file created")}
//       //       })
//       // }
     
// app.listen(4000,"127.0.0.1",()=>{console.log("listening the port no. 4000")})









                        ////////// (******my practice)

// const fs=require("fs")
// const express=require("express")
// const app=express()

// app.use(express.json())

// app.post("/",(req,res)=>{

//       fs.readFile("abc.json",(err,data)=>{
//             if(!err){
//             console.log(JSON.parse(data),"<<<<<<<<<<<<<<<<<<");
//             let a=JSON.parse(data) 
//             a.push(req.body)
            
            
//             fs.writeFile("abc.json",JSON.stringify(a),((err,value)=>{
//                   if(!err){
//                   console.log(value)}
//                   ;}))
//                   }

//             else{
                        
//                         fs.writeFile("abc.json",`[${JSON.stringify(req.body)}]`,((err,value)=>{
//                               if(!err){
//                               console.log(value)}
//                               ;}))
//                   }
//       })
// res.send("I am post method")

// })
// app.listen(4000,"127.0.0.1",()=>{console.log("listening the port no. 4000")})





// const fs=require("fs")
// const express=require("express")
// const app=express()
// app.use(express.json())
// app.post("/",(req,res)=>{
//       fs.readFile("abcd.json",(err,data)=>{
//             if(!err){console.log(JSON.parse(data),"<<<<<<");
//             let a=JSON.parse(data)
//             a.push(req.body)
//             fs.writeFile("abcd.json",JSON.stringify(a),(err,value)=>{
//                   if(!err){console.log(value);}
//             })}
//             else{
//                   fs.writeFile("abcd.json",`[${JSON.stringify(req.body)}]`,(err,value)=>{
//                         if(!err){
//                               console.log(value)}
//                         })}
//                   })
// res.send("i am posted")
// })
      
// app.listen(4000,()=>{console.log("listening the prot 4000");})












                  ////////// (*********** registration)
// app.post("/register",(req,res)=>{
//       try{
//           let a=fs.readFileSync("abc.json","utf-8");
//             a=JSON.parse(a)
//             for(let i=0,i<a.length,i++){
//                   if(a[i].username===req.body.username){
//                         if(a[i].password==req.body.password){
//                               return res.send("already exist ")
//                         }
//                         else{
//                               a.splice(a[i],1,req.body);
//                               //write
//                               return res.send("successfully password")
                              
//                         }
//                   }
//                   else if(i+1===a.length){//1+1==10 false
// a.push(req.body)
// //writefile
// return res.body("successfully created")
//                   }

//             }
//             a.push(req.body)  
//            let b= fs.writeFileSync("abc.json",JSON.stringify(a));
//            console.log({b});
//       }






// const fs=require("fs")
// const express=require("express")
// const app=express()
// app.use(express.json())
// app.post("/register",(req,res)=>{
//       fs.writeFileSync("abcd.json",`[${JSON.stringify(req.body)}]`)
//       let a=fs.readFile("abcd.json","utf-8",(err,data)=>{console.log(data)})
//       // a=JSON.parse(a) 
//       for(let i=0;i<a.length;i++){
            // if(a[i].username===req.body.username){
            //       if(a[i].password===req.body.password){
            //             return res.send("already exists")
            //       }

            // }
            // else{
            //       a.push(req.body)
            //       a.splice(a[i],1,req.body);
            //       fs.writeFileSync("abcd.json",req.body)
            //       return res.send("successfully password")
                                               
            //          }}

      // }








// res.send("i am read")

// })

// app.listen(5000,()=>console.log("listening the port 5000"))




// let a=["a","b","c","d"]
// for(let i in a){console.log(a[i]);}









// const fs=require("fs")
// const express=require("express")
// const app=express()
// app.use(express.json())
// app.post("/login",(req,res)=>{
//       // let a=fs.writeFileSync("abcd.json",`[${JSON.stringify(req.body.data)}]`)
//       let b=fs.readFileSync("abcd.json","utf-8")
//       b=JSON.parse(b) 
//       // console.log(b);
//       for(let i in b){console.log(b[i],"<<<<<<<")}


// res.send("posted")

// })

// app.listen(5000,()=>console.log("listening the port 5000"))








// const fs=require("fs")
// const express=require("express")
// const app=express()
// app.use(express.json())
// app.post("/login",(req,res)=>{
//       // let a=fs.writeFileSync("abcd.json",`[${JSON.stringify(req.body.data)}]`)
//       let b=fs.readFileSync("abcd.json","utf-8")
//       b=JSON.parse(b) 
// //       // console.log(b);
//       for(let i in b){
//             if(b[i].username===req.body.data.username && b[i].password===req.body.data.password){
//                         return res.send("already exists")
//                   }}
            
//                   b.push(req.body.data)
//                   fs.writeFile("abcd.json",JSON.stringify(b),(err,value)=>{
//                        console.log(value);
//                   })
//                   res.send("data different so added")
//                   console.log("data added");
                  
                  
            
            
            
       


// })

// app.listen(7000,()=>console.log("listening the port 7000"))



//                         ////////(******** how to create login data)
// const fs=require("fs")
// const express=require("express")
// const app=express()
// app.use(express.json())
// app.post("/login",(req,res)=>{
//       let b=fs.readFileSync("abcd.json","utf-8")
//       b=JSON.parse(b) 
//       for(let i in b){
//             if(b[i].username===req.body.data.username && b[i].password===req.body.data.password){
//                         return res.send("already exists")
//                   }}
            
//                   b.push(req.body.data)
//                   fs.writeFile("abcd.json",JSON.stringify(b),(err,value)=>{
//                        console.log(value);
//                   })
//                   res.send("data different so added")
//                   console.log("data added");
// })

// app.listen(7000,()=>console.log("listening the port 7000"))








// const fs=require("fs")
// const express=require("express")
// const app=express()
// app.use(express.json())
// app.post("/login",(req,res)=>{
//       // let a=fs.writeFileSync("abcd.json",`[${JSON.stringify(req.body.data)}]`)
//       let b=fs.readFileSync("abcd.json","utf-8")
//       b=JSON.parse(b) 
// //       // console.log(b);
//       for(let i in b){
//             if(b[i].username===req.body.data.username || b[i].password===req.body.data.password){
//                         return res.send("already exists")
//                   }}
            
//                   b.push(req.body.data)
//                   fs.writeFile("abcd.json",JSON.stringify(b),(err,value)=>{
//                        console.log(value);
//                   })
//                   res.send("data different so added")
//                   console.log("data added");
// })

// app.listen(7000,()=>console.log("listening the port 7000"))








// const fs=require("fs")
// const express=require("express")
// const app=express()
// app.use(express.json())
// app.post("/login",(req,res)=>{
//       let a=fs.readFileSync("abcd.json","utf-8")
//       a=JSON.parse(a)
//       for(let i in a){
//             if(a[i].username===req.body.username && a[i].password===req.body.password){return res.send("already exists");}
//       }
//       a.push(req.body)
//       fs.writeFile("abcd.json",JSON.stringify(a),(err,value)=>{
//             res.send("data differen so it added")
//             console.log("data added");
//       })
// })
// app.listen(7000,()=>{console.log("listening the port 7000");})












// const fs=require("fs")
// const express=require("express")
// const app=express()
// app.use(express.json())
// app.post("/register",(req,res)=>{
//       let a=fs.readFileSync("abcd.json","utf-8")
//       a=JSON.parse(a)
//       for(let i in a){
//             if(a[i].username===req.body.data.username || a[i].password===req.body.data.password){
//                   return res.send("username or password already exists")
//             }
//       }
//       a.push(req.body.data)
//       fs.writeFile("abcd.json",JSON.stringify(a),(err,value)=>{
//             console.log(value);})
//             res.send("data differen so it added")
//             console.log("data added")

            
// })

// app.listen(7000,()=>{console.log("listening the port 7000");})







                        //////// (***** login)

// const fs=require("fs")
// const express=require("express")
// const app=express()
// app.use(express.json())
// app.post("/login",(req,res)=>{
//       let a=fs.readFileSync("abcd.json","utf-8")
//       a=JSON.parse(a)
//       for(let i in a){
//             if (a[i].username===req.body.data.username){
//                   if(a[i].password===req.body.data.password){return res.send("you logged in successfully")}
//                   else{return res.send("password incorrect")}
//             }

//       }
//       res.send("incorrect username")
// })

// app.listen(7000,()=>{console.log("listening the port 7000");})

                              //////(*****register)
// const fs=require("fs")
// const express=require("express")
// const exp = require("constants")
// const app=express()
// app.use(express.json())
// app.post("/login",(req,res)=>{
//       let a=fs.readFileSync("abcd.json","utf-8")
//       a=JSON.parse(a)
//       for(let i in a){
//             if (a[i].username===req.body.data.username){
//                   // a.splice(i,1,req.body)
//                   // write !err(res.send("updated"))
//                   if(a[i].password===req.body.data.password){return res.send("you logged in successfully")}
//                   else{return res.send("password incorrect")}
//             }

//       }
//       res.send("incorrect username")
// })
// app.post("/register",(req,res)=>{
//       let a=fs.readFileSync("abcd.json","utf-8")
//       a=JSON.parse(a)
//       for(let i in a){
//             if (a[i].username===req.body.data.username){return res.send("already exists")}
            
//       }
//       a.push(req.body.data)
//       fs.writeFile("abcd.json",JSON.stringify(a),(err,value)=>{console.log(value);})
//       res.send("data different so it added")
//       console.log("data added");

// })

// app.listen(7000,()=>{console.log("listening the port 7000");})





                        /////(****** forget password)
// const fs=require("fs")
// const express=require("express")
// // const exp = require("constants")
// // const mysqlCon=require("./demo")
// const app=express()
// app.use(express.json())

// app.post("/password",(req,res)=>{

//       if(!req.body.data.username){
//             return res.send("username required")
//             // mysqlCon.query("",(err,value)=>{

//             // })
//       }
      

//       if(!req.body.data.password){
//             return res.send("please enter password")
//       }

//       try{
//             // mysqlCon.query(`insert into students (id,email,age,name,status) values(13,"${req.body.data.username}",29,"suraj5",1)`,(err,value)=>{data
//             //       if(err) throw err;
//             //       console.log("all values are here",value)
//             //   })
//       let a=fs.readFileSync("abcd.json","utf-8")
//       a=JSON.parse(a)
//       for(let i in a){
//             if (a[i].username===req.body.data.username){
//                   a.splice(i,1,req.body.data)
//                   console.log({a});
//                   fs.writeFile("abcd.json",JSON.stringify(a),(err,value)=>{console.log(value);
//                         if(!err){
//                         console.log({err});
//                         return res.send("congratulations your password changed sucessfully.")
//                   }
//                   else{
//                         return res.send("something went wrong")
//                   }
//             })
//                   return;
//             }
            
            
//       }
// //       catch(err){console.err(err);}
//       return res.send(" sorry username different please enter the valid username.")
// }
// catch(err){
//       // console.err(err);
//       res.send("somethingg went wrong")
// }
// //       // a.push(req.body.data)
// //       // fs.writeFile("abcd.json",JSON.stringify(a),(err,value)=>{console.log(value);})
// //       // res.send("data different so it added")
// //       // console.log("data added");

// })

// app.listen(2000,()=>{console.log("listening the port 7000");})












// const fs=require("fs")
// const express=require("express")
// const exp = require("constants")
// const mysqlCon=require("./demo")
// const app=express()
// app.use(express.json())

// app.post("/password",(req,res)=>{

//       if(!req.body.data.username){
//             return res.send("username required")
//             // mysqlCon.query("",(err,value)=>{

//             // })
//       }
      

//       if(!req.body.data.password){
//             return res.send("please enter password")
//       }

//       try{
//             mysqlCon.query(`insert into students (id,email,age,name,status) values(13,"${req.body.data.username}",29,"suraj5",1)`,(err,value)=>{data
//                   if(err) throw err;
//                   console.log("all values are here",value)
//               })
//       let a=fs.readFileSync("abcd.json","utf-8")
//       a=JSON.parse(a)
//       for(let i in a){
//             if (a[i].username===req.body.data.username){
//                   a.splice(i,1,req.body.data)
//                   console.log({a});
//                   fs.writeFile("abcd.json",JSON.stringify(a),(err,value)=>{console.log(value);
//                         if(!err){
//                         console.log({err});
//                         return res.send("congratulations your password changed sucessfully.")
//                   }
//                   else{
//                         return res.send("something went wrong")
//                   }
//             })
//                   return;
//             }
            
            
//       }

// //       catch(err){console.err(err);}
//       return res.send(" sorry username different please enter the valid username.")
// }
// catch(err){
//       // console.err(err);
//       res.send("somethingg went wrong")
// }

// })

// app.listen(2000,()=>{console.log("listening the port 7000");})














// const fs=require("fs")
// const express=require("express")
// const exp = require("constants")
// const mysqlcon=require("./demo")
// const app=express()
// app.use(express.json())

// // const mysql=require("mysql")
// // const con=mysql.createConnection({
// //       host:"localhost",
// //       user:"root",
// //       password:"Surajsah@97",
// //       database:"abdulla"
// // });
// // mysqlcon.connect((err)=>{
// //       if(err) throw err;
// //       else{console.log("connected successfully")
// // }

// // })

//                   ////////(****this is select query)
// // const a=`select * from user where password=123`
// // mysqlcon.query(a,(err,results)=>{
// //       console.log(results);
// // })


//                   /////(****this is insert query)
// // const insertquery='insert into `user` (`username`,`password`) values (?,?)'
// // const a=mysql.format(insertquery,[req.body.data.username,req.body.data.password])
// // con.query(a,(err,res)=>{
// //       if(err) throw err;
// //       console.log("data added");
// // })
// const a=`select * from user`
// mysqlcon.query(a,(err,results)=>{
//       console.log(results);
// })

// app.post("/password",(req,res)=>{
//       // const stid=req.body.data.id;
//       const stusername=req.body.data.username;
//       const stpassword=req.body.data.password;
// //       const insertquery='insert into `user` (`username`,`password`) values (?,?)'
// // const a=mysqlcon.format(insertquery,[stusername,stpassword])
// // if(mysqlcon.query(a,(err,res)=>{
// //       if(err) throw err;
// //       console.log("data added");
// // })){res.send("data gya table me")}
//       if(!stusername){
//             return res.send("username required")
//       }
//       if (!stpassword){
//             res.send("password required")
//       }
// try{for (let i in a){
//       if (a[i].username===stusername){
//             a.splice(i,1,req.body.data)
//             console.log({a});
//             if(!err){console.log({err});
//             return res.send("congratulations your password changed successfully")}
//             else{return res.send ("something went wrong")}
//       }
//       // return;
//       // return res.send("sorry  username different")
      
      
// }}
// catch(err){console.log(err);
//       res.send("sometihng went wrong")

// }


      

// //      try{ mysqlcon.query(`INSERT INTO students VALUES('${stusername}','${stpassword}')`)
// //       res.send("created")

// //       }
// //       catch(err){
// //             console.log(err);
// //       }

//       // const insertquery='insert into `user` (`username`,`password`) values (?,?)'
//       // const a=mysql.format(insertquery,[req.body.data.username,req.body.data.password])
//       // con.query(a,(err,res)=>{
//       //       if(err) throw err;
//       //       console.log("data added");
//       // })
//       // const getquery="select * from `user` where `password`=?"
//       // const b=mysql.format(getquery,[])
//       // con.query(getquery,(err,result)=>{ 
//       //       if (err) throw err;
//       //       console.log("table here");
//       // })





// })
      


// app.listen(3000,(err)=>{
//       if(err){console.log(err)}
//       else{console.log("listening the port 3000");}
// })







// const fs=require("fs")
// const express=require("express")
// const exp = require("constants")
// const mysqlcon=require("./demo")
// const app=express()
// app.use(express.json())

// app.post("/password",async(req,res)=>{
//       let stusername=req.body.data.username;
//       let stpassword=req.body.data.password;


//        mysqlcon.query("select * from user",(err,value)=>{
//          console.log({value});
//             for (let i in value){
//                         if (value[i].username===stusername){
//                               // value.splice(i,1,req.body.data)8
//        mysqlcon.query(`update user set password="${req.body.data.password}" where username="${stusername}"`,(err,value)=>{
//             console.log({err});
//             if(!err){
//                   return res.send("congratulations your password changed successfully")
                  
//             }
//             else{
//                   return res.send("something went wrong");
//             }
            
//       })
//       return;
// }}
// return res.send("username different");
      
//       })
// })

                              // console.log({a});
//                               if(err){console.log({err});
//                               return res.send("congratulations your password changed successfully")}
//                               // else{return res.send ("something went wrong")}
//                         }
                        
//                   } return;
         
//        });
//       // console.log({data});
// })

// const a=`select * from user`
// mysqlcon.query(a,(err,results)=>{
      // console.log(results);
// })
// app.post("/password",(req,res)=>{
//       const stusername=req.body.data.username;
//       const stpassword=req.body.data.password;
//       if(!stusername){
//             return res.send("username required")
//       }
//       if (!stpassword){
//             res.send("password required")
//       }
// try{for (let i in a){
//       if (a[i].username===stusername){
//             a.splice(i,1,req.body.data)
//             // console.log({a});
//             if(err){console.log({err});
//             return res.send("congratulations your password changed successfully")}
//             // else{return res.send ("something went wrong")}
//       }
      
// } return;
// }
// catch(err){console.log(err);
//       res.send("sometihng went wrong")
// }
// })
// })      
// app.listen(4000,(err)=>{
//       if(err){console.log(err)}
//       else{console.log("listening the port 4000");}
// })




// // const fs=require("fs")
// const express=require("express")
// const exp = require("constants")
// const mysqlcon=require("./demo")
// const app=express()
// app.use(express.json())
//             ////(**** select query)

// const a=`select * from user`
// mysqlcon.query(a,(err,results)=>{
//       console.log(results);
// })
//             ////(**** insert query)
// app.post("/password",(req,res)=>{
// // const insertquery=`insert into user (username,password) values (?,?)`
// // const b=mysqlcon.format(insertquery,[req.body.data.username,req.body.data.password])
// // mysqlcon.query(b,(err,res)=>{
// //       if(err) throw err
// //       console.log("data added");
// // })
// // return res.send("data gaya mysql me")

//             ////(**** update query)
// const update=`update user set (username=?,password=?) where username=suraj2`
// const c=mysqlcon.format(update,[req.body.data.username,req.body.data.password])
// mysqlcon.query(c,(err,res)=>{
//       if(err) throw err
//       console.log("data added");
// })
// return res.send("data updated in mysql")
// })

// app.listen(2000,(err)=>{
//       if(err){console.log(err)}
//       else{console.log("listening the port 3000");}
//  })










                  ///////(****** forget password so change password using mysql )
// const express=require("express")
// const exp = require("constants")
// const mysqlcon=require("./demo")
// const app=express()
// app.use(express.json())

// app.post("/password",async(req,res)=>{
//       let stusername=req.body.data.username;
//       let stpassword=req.body.data.password;


//        mysqlcon.query("select * from user",(err,value)=>{
//          console.log({value});
//             if(!stusername){return res.send("username required")}
//             if(!stpassword){return res.send("password required")}
//             for (let i in value){
//                         if (value[i].username===stusername){
//                               // value.splice(i,1,req.body.data)8
//        mysqlcon.query(`update user set password="${stpassword}" where username="${stusername}"`,(err,value)=>{
//             console.log({err});
//             if(!err){
//                   return res.send("congratulations your password changed successfully")
                  
//             }
//             else{
//                   return res.send("something went wrong");
//             }
            
//       })
//       return;
// }}
// return res.send("username different");
      
//       })
// })

// app.listen(4000,(err)=>{
//       if(err){console.log(err)}
//       else{console.log("listening the port 4000");}
// })


                        ///////(***** login id using mysql)
// const express=require("express")
// const app=express()
// const mysqlcon=require("./demo")
// app.use(express.json())
// app.post("/login",(req,res)=>{
//       let stusername=req.body.data.username
//       let stpassword=req.body.data.password

//       mysqlcon.query("select * from user",(err,value)=>{
//             if(err){console.log(err)}
//             else{console.log({value})};
//             for(let i in value){
//                   if(value[i].username===stusername){
//                         if(value[i].password===stpassword){return res.send("you logged in sucessfully.")}
//                         else{return res.send("wrong password.")};
//                   }
                  
//             }
//             return res.send("username different.")
//       })
            
            
//       })
      
// app.listen(4000,(err)=>{
//       if(err){console.log(err);}
//       else{console.log("listening the port 4000");}
// })



                        //////(**** register using mysql)
// const express=require("express")
// const app=express()
// const mysqlcon=require("./demo")
// app.use(express.json())

// app.post("/register",(req,res)=>{
//       let stusername=req.body.data.username
//       let stpassword=req.body.data.password
//       mysqlcon.query("select * from user",(err,value)=>{
//             if(err) throw err
//             else{console.log({value});}
//             for(let i in value){
//                   if(value[i].username===stusername){return res.send("username already exists")}

//             }
//       //        mysqlcon.query(`INSERT INTO user VALUES('${stusername}','${stpassword}')`)
//       // res.send("you are registered sucessfully.")

//                               /////or(we can insert in two way)
      
//             mysqlcon.query(`insert into user (username,password) values ("${stusername}","${stpassword}")`,(err,results)=>{
//                         if(err) throw err
//                         console.log("data added.");
//             })
//             res.send("you are registered sucessfully.")

//       })
// })

// app.listen(2000,()=>{console.log("listening the port 2000");})



                        ///////(**** delete data using mysql)
// const express=require("express")
// const app=express()
// const mysqlcon=require("./demo")
// app.use(express.json())

// app.post("/delete",(req,res)=>{
//       let stusername=req.body.data.username
//       let stpassword=req.body.data.password
//       // mysqlcon.query("delete from user where username='stusername',password='stpassword'")
//       mysqlcon.query("select * from user",(err,value)=>{
//             if(err) throw err
//             console.log({value});
//             for(let i in value){
//                   if(value[i].username===stusername && value[i].password===stpassword){
//                   mysqlcon.query(`delete from user where username="${stusername}" and password="${stpassword}"`)
//                   return res.send("your account deleted sucessfully.")

//                   }
//             }
//             return res.send("incorrect username and password")
//       })
// })

// app.listen(2000,()=>{
//       console.log("listening the port 2000");
// })