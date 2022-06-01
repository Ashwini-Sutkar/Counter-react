 /* Increament / Decreament Counter */
 
 import { useState } from "react";
 import "./App.css";

  const App=() =>{

    const [counter, setcounter]=useState(1);
    const increamentCounter=()=>setcounter(counter+1);

    let decreamentCounter=()=>setcounter(counter-1);

     if(counter<=0) {
       decreamentCounter=()=>setcounter(0);
     }
     return (
       < >
       <h1>{ counter }</h1>
       <button  className="btn" onClick={ increamentCounter }>Click me</button>
       <button className="btn" onClick={ decreamentCounter }>Click me</button>
       
       
       </>
     );

  }

    export default App;






































































 
 
 /*import {useState} from 'react';
 import "./App.css";

  const App=()=> {
   
  const [counter, setcounter]=useState(1);
  const increamentCounter=()=>setcounter(counter+1);

  let decreamentCounter=()=> setcounter(counter-1);
    if(counter<=0){
    decreamentCounter=()=> setcounter(0);

   }
   return (
    <>
     <h1>{counter}</h1>
     <button onClick={increamentCounter}>Click me </button> 
     <button onClick={decreamentCounter}>Click me </button>
    </>

  );
}
 export default App;
 */