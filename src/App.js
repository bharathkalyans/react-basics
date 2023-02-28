import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header name="Bharath" color="purple" />
      <div>
        <Main greet="Howdy" />
        <Sidebar greet="Hi" />
      </div>
    </>
  );
}

export default App;
