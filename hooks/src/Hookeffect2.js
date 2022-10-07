import React,{useEffect,useState} from 'react'


const Hookeffect2 = () => {
    const [counter, setCounter]= useState(0);
  const [name, setName]= useState("");
  const [countByTen, setCountByTen]= useState(10);
    useEffect(()=>{document.title=countByTen+"times clicked!!"},[countByTen])
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
      <h1>count by 10: {countByTen}</h1>
      <button onClick={()=>setCountByTen(countByTen+10)}>count increased by 10</button>
   
       
      
    </>
  );
}


export default Hookeffect2;