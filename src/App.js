import "./App.css";
import Heading from "./components/Heading";
import Tick from "./components/Tick";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Heading />
      <Tick />
      <TodoList />
    </div>
  );
}

export default App;
