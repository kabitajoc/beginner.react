import React, { useState } from "react";
import "./CounterApp.css";

function CounterApp() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-app">
      <button className="btn-left" onClick={decrement}>
        -
      </button>
      <p>{count}</p>

      <button className="btn-right" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default CounterApp;
