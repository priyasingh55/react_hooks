import React, { useState } from 'react'
export default function Count(){

  useState
  const [name,setName ]=useState("");

  const handleInputChange = (event) => {
        setName(event.target.value);
      };

  return (
    <div>
    <button onClick={()=>setName((currVal)=>{
   return currVal="Vishal"
    })}>{name}</button>
    &nbsp;
    <input type="text"  value={name} onChange={handleInputChange}/>
    </div>
  )
    
}
// function MyComponent() {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="myInput">Input:</label>
//       <input
//         type="text"
//         id="myInput"
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// }

// export default MyComponent;
