import React, { useState } from "react";
import "./styles.css";

function CounterButton({ label, onClick }) {
  const buttonStyle = {
    margin: "5px",
    padding: "10px",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount((prevCount) => Math.max(prevCount + value, 0));
  };

  return (
    <div className="App"> 
      <h1>React Counter</h1>
      <h2>Current Count: {count}</h2>
      <CounterButton label="Increase " onClick={() => handleClick(1)} />
      <CounterButton label="Decrease " onClick={() => handleClick(-1)} />
    </div>
  );

  const appStyle = {
    textAlign: "center",
    marginTop: "50px",
  };
}
