let promise = new Promise((resolve,reject)=>{
let success=false
if(success){
    resolve("data fetched")
}
else{
    reject("error occured")
}

})
promise.then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res)
})
