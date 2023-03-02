import "./App.css";
import Child from "./components/Child";
function App() {
  const date = new Date();

  return (
    <>
      <Child message={date.toLocaleDateString()} />
    </>
  );
}

export default App;
