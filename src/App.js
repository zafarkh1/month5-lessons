import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import HomePage from "./component/pages/HomePage";
import VideoPage from "./pages/VideoPage";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/watch/:videoId" component={VideoPage} />
            <Route path="/results/:searchQuery" component={SearchResultsPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
