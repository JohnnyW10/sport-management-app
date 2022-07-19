import React, {useState, useEffect} from "react";


export default function PersonLibrary() {
  let [counter, setCounter] = useState(0)


  return(<div>
    <button onClick={() => {setCounter(counter-1)}}>-</button>
    <p>{counter}</p>
    <button onClick={() => {setCounter(counter+1)}}>+</button>
  </div>)
}





 