import React,{use, useState} from 'react';


// function countInitial(){
//   console.log("run function")
//   return 5

// }
 function Count(){
const [count,setCount]=useState(5);
// ===============or=========
  // const [count, setCount]=useState(()=>{
  //   console.log("run function");
  //   return 10;
  // })
  // ==============or=============
  // it run every single time when function render
  // const [count ,setCount]= useState(countInitial())

  // it run single time
  // const [count, setCount]= useState(()=>countInitial())



  function decrementCount(){
    // setCount(count-1)
    setCount(prevCount => prevCount-1)
    // setCount(prevCount => prevCount-1)
  }
  function incrementCount(){
    setCount(count+1)
    // setCount(prevCount => prevCount+1)
    // setCount(prevCount => prevCount+1)
  }



return(

<>
<button onClick={decrementCount}>-</button>
<span> &nbsp;{count}&nbsp; </span>
<button onClick={incrementCount}>+</button>
<button onClick={() =>{
  setCount(count*0)
}}>Reset</button>
</>
)
}
export default Count;