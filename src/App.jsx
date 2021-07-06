import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Breed from './catbreed';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/catbreed'>Breed</Link>
          </li>
        </ul>
      </nav>


      <Switch>
        <Route path="/catbreed">
          <Breed />
        </Route>
        <Route exact path='/'>
        <h1>The beginnings of the Cat website</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
