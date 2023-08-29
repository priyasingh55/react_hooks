
import React,{useState} from "react";

export default function Exp_useState(){
  const [page, setPage]= useState('home');

  return(
    <>
    
    <button onClick={()=>{setPage("home")}}>Home</button>
    <button onClick={()=>{setPage("about")}}>About</button>
    <button onClick={()=>{setPage("contact")}}>Contact</button>

    <h2>{page}</h2>
    

    
    </>
  )


}