import { useEffect, useState } from 'react';
import Axios from 'axios';

import './App.css';

function App() {


const [info, setInfo] = useState([]);
const [input, setInput] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState("inr");

const [output, setOutput] = useState(0);


useEffect(() => {
	Axios.get(
`https://www.jsonapi.co/public-api/Currency-api=${from}`)
.then((res) => {
	setInfo(res.data[from]);
	})
}, [from]);

function convert() {
	var rate = info[to];
	setOutput(input * rate);
}




return (
	<div className="App">
	<div className="heading">
		<h1>Currency converter</h1>
	</div>
	<div className="container">
		<div className="left">
		<h3>Amount</h3>
		<input type="text"
			placeholder="Enter the amount"
			onChange={(e) => setInput(e.target.value)} />
		</div>
		<div className="middle">
		<h3>From</h3>
    <input type="text"
			placeholder="converted amt"
			onChange={(e) => setInput(e.target.value)} />
    
		
		</div>
    
	</div>
 
	<div className="result">
		<button onClick={()=>{convert()}}>Convert</button>
		<h2>Converted Amount:</h2>
		

	</div>
	</div>
);
}

export default App;
