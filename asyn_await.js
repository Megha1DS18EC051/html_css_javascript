adding=()=>{
    setTimeout(()=>{console.log(3+7);},2000);}
    
multiplying=()=>{
    setTimeout(()=>{console.log(3*7); },1000);} 


substracting=()=>{
    setTimeout(()=>{console.log(7-3);},1000);}



async function arithmetic()
{
    await adding();
    await multiplying();
   // await learning();
    await substracting();
}
//menu();

arithmetic().then(()=>{
    setTimeout(()=>{console.log("DONE!");},3000);
});