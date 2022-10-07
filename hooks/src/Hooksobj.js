import './App.css';
import React,{useState} from 'react'

function Hooksobj(){
    //const [counter, setCounter]= useState(0);
  //const [name, setName]= useState("");
    const [details, setDetails]=useState({counter:0,name:""})
    function Increase()
    {
        setDetails((prev)=>({
            ...prev,
            counter:prev.counter+1
        }))
       

    }
    function Decrease()
    {
        setDetails((prev)=>({
            ...prev,
            counter:prev.counter-1
        }))
       

    }
    return(
        <>
        <h1>Conter:{details.counter}</h1>
        
      
      <button onClick={Increase}>objIncrease</button>
      <button onClick={Decrease}>objDecrease</button></>

    )
}
export default Hooksobj;
