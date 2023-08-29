import React,{use,useState, useEffect} from "react";
import { preinit } from "react-dom";

export default function Resource(){
  const[resourceType, setResourceType]=useState("posts");
  const [items, setItems]= useState([])
  
// this array resourcetype will be changed when it is render
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType} `)
      .then(response => response.json())
      .then(json => setItems(json))
  },[resourceType])


// this empty array gonna never be changes when state is changed
  // useEffect(()=>{
  //   console.log("onMount")
  // },[])

return(
  <>
  <button onClick={()=> setResourceType("posts")}>Posts</button>
  <button onClick={()=>setResourceType("users")}>Users</button>
  <button onClick={()=>setResourceType("comments")}>Comments</button>

  <h1>{resourceType}</h1>
  {items.map(item =>{
    return <pre>{JSON.stringify(item)}</pre>
  }
    )}
  </>
)
}