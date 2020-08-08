import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Prevention from "./pages/prevention";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/prevention" component={Prevention} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
