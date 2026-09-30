function message(){
    console.log('bye')
}
function greet(callback){
    console.log("hey");
    callback();
}
greet(message);
setTimeout(() => {
    console.log("first");
    setTimeout(()=>{
        console.log("second")
    },2000)
    setTimeout(()=>{
        console.log("third")
    },3000)
}, 1000);