import React,{use,useState,useEffect, useMemo} from "react";

export default function EXp_usestatememo(){
  const [number,setNumber]=useState(0)
  const [dark,setDark]= useState(false)
  const doubleNumber =slowFunction(number)
  const themeStyles ={
    backgroundColor:dark ? 'black':'white',
    color: dark? 'white':'black'
  }
  return(
    <>
    <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
    <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num){
  console.log("calling slow.............")
  for(let i=0; i<=1000000000; i++){

  }
  return num*2

}
