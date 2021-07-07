import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () =>{
  return(
    <Router>
      <div>
        
        <Navbar />
      </div>

    </Router>
  )
}

export default App;
