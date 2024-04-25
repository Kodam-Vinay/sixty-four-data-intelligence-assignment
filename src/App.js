import "./App.css";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app-main-container">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;
