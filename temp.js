const input=document.getElementById("textbox");
const myid =document.getElementById("myid");
const second=document.getElementById("new");
const button=document.getElementById("button");
const hii =document.getElementById("p");
let result;

button.onclick=function(){
    if(myid.checked){
        result=Number(input.value);
       result=(result-32)*(5/9);
       hii.textContent=result+"°c";

    }
    else if(second.checked){
        result=Number(input.value);
        result=result*9/5+32;
        hii.textContent=result+"°F";
       

    }
    else{
        hii.textContent=`chose any of one.`;
    }
}