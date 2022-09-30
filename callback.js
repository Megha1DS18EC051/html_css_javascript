adding=()=>{
    console.log(3+7);}
    
multiplying=(callback)=>{
    setTimeout(()=>
    {console.log(3*7); 
    callback()
   },1000);} 


substracting=()=>{
    console.log(7-3);}

multiplying(function (){
    adding();
    substracting();
})