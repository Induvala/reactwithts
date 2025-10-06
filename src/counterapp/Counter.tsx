import React, { use, useState } from 'react'

function Counter() {
    const [counter,setCounter] = useState(0);
    const [disable,setDisable] = useState(false);
    
    function handleDecrement(){
           if(counter==0){
            setDisable(true)
           }
           else{
            setCounter(counter-1);   
           }         
    }
    function handleIncre(){
        setCounter(counter+1);
        setDisable(false)
    }
  return (
    <>
    <p>Counter: {counter}</p>
    <button onClick={handleIncre}>Increment</button>
    <button onClick={handleDecrement} disabled={disable}>Decrement</button>
    <button onClick={()=>setCounter(0)}>Reset</button>
    </>
  )
}

export default Counter