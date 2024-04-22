import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div
      id="home"
      className="app poppins w-screen bg-[#ede8f5] flex flex-col justify-center items-center"
      style={{ transition: "background-color 1s ease" }}
    >
      <Navbar />

      <Home />

      <Projects />

      <div className="spacer h-[50vh]"></div>
    </div>
  );
}

export default App;
