import "./App.css";
import Heading from "./components/Heading";
import Tick from "./components/Tick";
import TodoList from "./components/TodoList";

function App() {
  const person = {
    name: "Bharath Kalyan S",
    url: "https://i.imgur.com/7vQD0fPs.jpg",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };

  const person2 = {
    name: "Ananth S",
    url: "https://i.imgur.com/7vQD0fPs.jpg",
    theme: {
      backgroundColor: "red",
      color: "pink",
    },
  };

  return (
    <div>
      <TodoList person={person} />
      <br />
      <TodoList person={person2} />
    </div>
  );
}

export default App;
