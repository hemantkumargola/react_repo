
import { useState } from 'react';
import './App.css'

function App() {

let [count,setCount] = useState(0)

  function incremt(){
    setCount(count+1)

  }
    function decrement(){
    setCount(count+1)

  }


  return (
    <div>
      <h1>
      Counter APP
      </h1>
      <p>Count : {count}</p>
<div className="button">
      <button onClick={incremt}>➕Incement</button>
      <button onClick={decrement}>➖Decriment</button>
      <button onClick={function(){setCount(0)}}>🔄️Reset</button>
      </div>
    </div>
  
  )
}

export default App
