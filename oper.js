const add=(a,b)=>{return a+b}
const sub=(a,b)=>{return a-b}
const mult=(a,b)=>{return a*b}
const name="vinod"

// module.exports.a=add
// module.exports.b=sub
// module.exports.c=mult
// module.exports.d=name

//// another way and best way to export
module.exports={add,sub,mult,name}


