import React,{useState,useEffect,createContext, useContext} from "react"
import { HelloContext } from "./Context1"


const Hookcontext3 = () => {
    const hello=useContext(HelloContext)
    console.log(hello)
    return (
        <div>
            <h1>Hi I am Megha</h1>
        </div>
    )
}

export default Hookcontext3
