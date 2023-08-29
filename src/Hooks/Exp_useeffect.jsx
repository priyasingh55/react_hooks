import React,{use,useState, useEffect} from "react";

export default function Resource(){
  const[resourceType, setResourceType]=useState("posts");


return(
  <>
  <button onClick={()=> setResourceType("posts")}>Posts</button>
  <button onClick={()=>setResourceType("users")}>Users</button>
  <button onClick={()=>setResourceType("comments")}>Comments</button>

  <h1>{resourceType}</h1>
  </>
)
}