import "./App.css";
import React, { useState } from "react";
import Heading from "./components/Heading";

function App() {
  const [word, setWord] = React.useState("Eat");

  // const handleClick = setWord("Drink");
  function handleClick() {
    setWord("Drink!");
  }
  
  return (
    <div className="App">
      <Heading message={word + " a little Lemon"} />
      <button onClick={handleClick}>Click to Drink!</button>
    </div>
  );
}

export default App;
