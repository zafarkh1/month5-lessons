import { auth } from "./component/firebase";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Success from "./component/success/Success";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route
            path="/about"
            element={user ? <About /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/about" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/success" /> : <Register />}
          />
          <Route
            path="/success"
            element={<Success/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
