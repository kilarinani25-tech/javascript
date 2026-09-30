let count=0;
let btn1=document.querySelector(".btn1")
function decrease(){
    count-=1;
    document.querySelector(".number").innerText=count;
}
let btn2=document.querySelector(".btn2")
function reset(){
    count=0;
    document.querySelector(".number").innerText=count;
}
let btn3=document.querySelector(".btn1")
function increase(){
    count+=1;
    document.querySelector(".number").innerText=count;
}