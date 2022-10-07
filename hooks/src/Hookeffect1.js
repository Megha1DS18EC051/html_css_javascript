import React,{useEffect,useState} from 'react'


const Hookeffect1 = () => {
    const [counter, setCounter]= useState(0);
  const [name, setName]= useState("");
    useEffect(()=>{document.title=counter+"times clicked!!"},[])
    function Increase(){
        setCounter(counter+1)
       }
       function Decrease(){
        setCounter(counter-1)
       }
  return (
   
    <>
    <input type="text " onChange={e=>setName(e.target.value)}></input>
      <h1>Conter:{counter}</h1>
      <h3>{name} has clicked {counter} times</h3>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
   
       
      
    </>
  );
}


export default Hookeffect1;