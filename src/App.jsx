import { Component, useState } from "react";

function Counter(){
  const [count, setCount] = useState(0);

  return(
    <div>
       <h2>{count}</h2>
       <button onClick={() => setCount(initialCount => initialCount + 1)}>Increase</button>
       <button onClick={() => setCount(initialCount => initialCount - 1)}>Decrease</button>
    </div>

  )
}

class MyApp extends Component{
  render(){
    return (
      <>
      <h1> Welcome to my Counter App</h1> 
      <Counter />
      </>
    )
  }
}

export default MyApp