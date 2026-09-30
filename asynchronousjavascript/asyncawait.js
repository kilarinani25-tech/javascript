let promise = new Promise((resolve,reject)=>{
let success=false
if(success){
    resolve("data fetched")
}
else{
    reject("error occured")
}

})
async function work(){
    try{
        let a=await promise
    console.log("done")

    }
    catch{
     console.log("promise rejected")
    }
    
}
work();