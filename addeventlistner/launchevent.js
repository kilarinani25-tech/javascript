const btn=document.querySelector("button");
// btn.onclick=()=>{
//     console.log("btn clicked by onclick func");

// }
btn.onmouseover=()=>{
    console.log("mouse over func");
}
const handlebtn=()=>
{
    console.log("addeventlistener function");
}
btn.addEventListener('click',handlebtn);
btn.removeEventListener('click',handlebtn);