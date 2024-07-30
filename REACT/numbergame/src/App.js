// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Result from './Result';
const correctValue = Math.floor(Math.random()*10) + 1;

function App() {
  const [term,setTerm] = useState();

  function handleChange(event){
    setTerm(event.target.value);
  }

  return (
    <div className="container">
      <div className="head">
        <label>Guess a number between 1 - 10 (answer:{correctValue})</label>
      </div>
      <input id="term" name="term" type="text" onChange={handleChange}/>
      <Result correctValue={correctValue} term={term}/>
    </div>
  );
}

export default App;
