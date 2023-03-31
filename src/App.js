import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import SingleArticle from "./components/spaPparam/SingleArticle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news/:id" element={SingleArticle}/>
      </Routes>
    </div>
  );
}

export default App;
