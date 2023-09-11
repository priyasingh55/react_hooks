import React, { useState } from "react";


export default function Todo_app(){
  const [name,setName]=useState("")
  
  const [list,setList]=useState(["hello","hiii","nope"])
  
  
  
  function updateList(){
   
    setName("")
    if(setList([name,...list])){
      name !==""
    }
   }
   function deleteFromList(element){
      const elem=list.filter((e)=>{
       return e!==element
     })
     setList(elem)
    
   }
  const createLIst = (element)=>{
    return (<li>{element} <button onClick={()=>deleteFromList(element)}>Delete</button></li>)
  }

  
  

  

  return(
    <div>
     
      <input type="text" value={name} onInput={e=>setName(e.target.value)}/>
      <button onClick={updateList}> +</button>
    
      {name}
      &nbsp;
     
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

let i=0;
let k=0;
for(let j=0; j<5; j++){
  k=k+1
 if(i<2){
  i=i+1
  
 
  

 }
 


}
console.log(i,k)