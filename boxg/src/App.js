import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';

function App() {

  const [boxColorArray, setBoxColorArray] = useState([]);

  return (
    <div className="App">
      <h1>Box Generator</h1>
      {
      boxColorArray.map((color) => (
        <div style={{
          border: "2px solid black", 
          width: "50px", 
          height: "50px", 
          margin: "10px",
          display: "inline-block",
          backgroundColor: color
        }}></div>
      ))
      }
      <Form boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray}></Form>
    </div>
  );
}

export default App;