//Asynchronous programming
/*greeting=()=>{
    console.log("hello");}

learning=()=>{
setTimeout(()=>{console.log("Iam learning Javascript");},1000);}
ending=()=>{
    console.log("Enjoying learning");}

greeting();
learning();
ending();


//callbacks
/*learning=()=>{
    console.log("Iam learning Javascript");}
    
greeting=(callback)=>{
    setTimeout(()=>
    {console.log("Hello"); 
    callback()
   },1000);} 


ending=()=>{
    console.log("Enjoying learning");}

greeting(function (){
    learning();
    ending();
})*/

//promises
/*greeting=()=>{
    return new Promise((resolve,reject)=>{
      // setTimeout(()=>{console.log("hello");},1000);       
      console.log("hello");  
      resolve();
        })
    }

learning=()=>{
    return new Promise((resolve,reject)=>{
        let errorHere=true;
        if(!errorHere)
        {
        setTimeout(()=>{console.log("Iam learning Js");},1000);
        resolve();
        }
        else
        reject("Error occured here");

       // setTimeout(()=>{console.log("Iam learning Javascript");},1000);
        //resolve();
    });
}

ending=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("Enjoying learning");},1000);
        //console.log("Enjoying learning");
        resolve();
    })
}
greeting()
.then(learning)
.then(ending).catch((err)=>{console.log("Exception : "+err)});
//learning().then(greeting).then(ending);
*/

//Async and await
greeting=()=>{
    setTimeout(()=>{console.log("Hello");},2000);}
    
learning=()=>{
    setTimeout(()=>{console.log("learning Javascript"); },1000);} 


ending=()=>{
    setTimeout(()=>{console.log("Enjoying learning");},1000);}



async function menu()
{
    await learning();
    await greeting();
   // await learning();
    await ending();
}
//menu();

menu().then(()=>{
    setTimeout(()=>{console.log("Everything working fine");},1000);
});
