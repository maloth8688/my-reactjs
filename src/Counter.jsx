/*import { useState } from "react";
function Counter(){
   // let counter= 0;
   // function increment( ){
     //   counter++;
       // console.log(counter);
    //}
    //function decrement(){
      //  Counter--;
        //console.log(counter);                   
    //}
    const[counter, setCounter]= useState(0);
    function increment( ){
        setCounter(counter+1);
    }
    function decrement( ){
      setCounter(counter-1);
    }


    return(
        <>
        <h2>Counter App</h2>
        <button onClick={increment}>Increment</button>
        <p>{counter}</p>
        
        <button onClick={decrement}>Decrement</button>
        </>
    );
}
export default Counter;*/


import{useState} from "react";
function Counter(){
  const[counter,setCounter] = useState(0);
  function increment( ){
    setCounter(counter+1);
  }
  function decrement( ){
    setCounter(counter-1);
  }


 return(
  <>
  <h1>Count</h1>
  <button onClick={increment}>Increment</button>
  <p>{counter}</p>
  <button onClick={decrement}>Decrement</button>
  </>
 )
}
export default Counter;



