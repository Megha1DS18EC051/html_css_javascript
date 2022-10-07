import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'


function App() {
  const [counter, setCounter]= useState(0);
  const [name, setName]= useState("");
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

export default App;
