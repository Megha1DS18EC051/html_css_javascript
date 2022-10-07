import React,{useState,useEffect,createContext} from "react"
import Hookcontext2 from "./Hookcontext2";
import Hookcontext3 from "./Hookcontext3";

export const HelloContext=createContext();

const Context1 = () => {
    return (
        <HelloContext.Provider value={"Hey"}>
            <div>
                <Hookcontext2/>
            </div>
        </HelloContext.Provider>
        
    )
}

export default Context1
