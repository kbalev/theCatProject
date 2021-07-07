import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Breed from './component-breeds/catbreed';



const App = () => {
  return (
    <Router>
      <Navbar />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catbreed">Breed</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/catbreed">
          <Breed />
        </Route>
        <Route exact path="/"></Route>
      </Switch>
    </Router>
  );
};

export default App;
