let a=(x)=>{
let n=1
let p=3
console.log((x(n,p)));
}

let b=(y)=>{
    var c=(a,b)=>{
        return a+b
    }
    // console.log(c(1,2))
    y(c)
}
b(a)
// b(c)
// a(c)
// c(2,b)