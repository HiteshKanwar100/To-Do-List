import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [arr, setArr] = useState([]);
  function handleChange(event) {
    const ivalue = event.target.value;
    setItem(ivalue);
  }
  function handleButton() {
    setArr((prevValue) => {
      return [...prevValue, item];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={item} onChange={handleChange} type="text" />
        <button onClick={handleButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arr.map((newItem) => (
            <li>{newItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
