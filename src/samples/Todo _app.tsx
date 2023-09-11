import React, { useState } from "react";


export default function Todo_app(){
  const [name,setName]=useState("Apple1")
  const [text,setText]=useState(["PRIYA","AMRITA" ,"PIYUSH"])
  const [list,setList]=useState(["hello","hiii","nope"])
  
  
  const [lastname,setLastname]=useState('empty')
  function updateList(){
    setLastname(name)
    setName("")
    setList([name,...list])
   }
   function deleteFromList(element){
    
    const newList=list.filter((e)=>{
      
      return e !==element
    })
    console.log(newList)
    setList([newList])
    

   }

  const createLIst = (element)=>{
    return (<li>{element} <button onClick={()=>deleteFromList(element)}>Delete</button></li>)
  }
  function emptyArray(){
   const arr= []
   console.log(arr)
   


  }
  // console.log(emptyArray())

  

  return(
    <div>
      <button onClick={()=>emptyArray()}>{text}</button>
      <input type="text" value={name} onInput={e=>setName(e.target.value)}/>
      <button onClick={updateList}> +</button>
    
      {name}
      &nbsp;
      {lastname}
      &nbsp;
      {<ol>{list.map (createLIst)
       
      }</ol>}
      <button onClick={()=>setList([])}> Delete</button>
      
    </div>
  )
}



// const arr =[1,2,3,4,5,6,7,8,9];
//  const newArr=arr.filter((currval)=>{
//    return currval!==3
// });
// console.log(newArr)