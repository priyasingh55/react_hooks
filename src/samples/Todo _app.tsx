import React, { useState } from "react";


export default function Todo_app(){
  const [name,setName]=useState("Apple1")
  const [list,setList]=useState(["hello"])
  const [lastname,setLastname]=useState('empty')
  function updateList(){
    setLastname(name)
    setName("")
    setList([name,...list])
   }

  return(
    <div>
      <input type="text" value={name} onInput={e=>setName(e.target.value)}/>
      <button onClick={e=>updateList()}> +</button>
    
      {name}
      &nbsp;
      {lastname}
      &nbsp;
      {<ol>{list.map(element=><li>{element}</li>)}</ol>}
      
    </div>
  )
}