import React,{use,useState, useEffect} from "react";

export default function Resource(){
  const[resourceType, setResourceType]=useState("posts");
  console.log("render")
// this array resourcetype will be changed when it is render
  useEffect(()=>{
    console.log("resource type changed")
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
  </>
)
}