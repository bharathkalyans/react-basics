import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./index.css";
import logo from "./Screenshot 2023-02-28 at 10.27.10 PM.jpg";

function Logo(props) {
  const userLogo = <img src={logo} alt="logo" style={props.dimensions} />;
  return userLogo;
}

function App() {
  const dimensions = {
    height: "400px",
    width: "600px",
  };
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Main />
        <Sidebar />
      </div>
      <Logo dimensions={dimensions} />
    </div>
  );
}

export default App;
