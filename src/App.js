import "./component/Navbar";
import "./App.css";
import Navbar from "./component/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Keyboards from "./component/Home";
import Music from "./component/Keyboards";
import Home from './component/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/keyboards" element={<Keyboards />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
