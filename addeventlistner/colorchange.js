let button=document.querySelector(".btn1");
 let isblack=false;
button.addEventListener("click",function(){
   
    if(isblack){
        document.body.style.backgroundColor="yellow";
    }
    else{
        document.body.style.backgroundColor="black";
    }
    isblack=!isblack;
    
});