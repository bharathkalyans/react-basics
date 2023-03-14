import "./App.css";
import { useState } from "react";

import { sculptureList } from "./components/data";

function App() {


  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
    setShowMore(false);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <div>
      <button onClick={handleNextClick}>Next</button>
      <h1>
        <i>{sculpture.name}</i>
      </h1>
      <h5> - {sculpture.artist}</h5>
      <h6>
        ({index + 1} of {sculptureList.length})
      </h6>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide Details" : "Show Details"}
      </button>
      <br />
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt}></img>
    </div>
  );
}

export default App;
