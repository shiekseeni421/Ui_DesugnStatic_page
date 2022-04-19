import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Context from "./Components/Context";

function App() {
  return (
    <div className="Main_Container">
      <div className="sub_container">
        <div className="sidebar_Container">
          <Sidebar />
        </div>
        <div className="Nav-context-container">
          <Navbar />
          <Context />
        </div>
      </div>
    </div>
  );
}

export default App;
