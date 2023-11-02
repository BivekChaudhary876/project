import { useState } from "react";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter != 20) setCounter(counter + 1);
    else {
      alert("You have reached the maximum value");
    }
    //   setCounter((prevCounter) => prevCounter + 1);
    //   setCounter((prevCounter) => prevCounter + 1);
    //   setCounter((prevCounter) => prevCounter + 1);
    //   setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    if (counter == 0) {
      alert("You can't decrease more");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello</h1>
      <button onClick={removeValue}>Remove Value</button>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
    </>
  );
}

export default App;
