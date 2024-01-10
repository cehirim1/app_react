import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    //Batching solutions - arrow function in state update method
    // setCount((count)=>count + 1);
    // setCount((count)=>count + 1);
    // setCount((count)=>count + 1);
    setCount(count + 1);
    console.log(count);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);

      console.log(count);
    }

    return;
  };
  return (
    <>
      <h1>Hello Course</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
