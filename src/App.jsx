import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Breed from './component-breeds/catbreed';
import { Shop } from "./Shop";
import { Cart } from "./Cart"

const App = () => {

  const [items,setItems] = useState([])
  const [data, setData] = useState('')
  const [prices, setPrices] = useState('')

  return (
    <Router>
      <Navbar />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catbreed">About</Link>
          </li>
          <li >
            <Link to="/Shop">Shop</Link>
          </li>
          <li >
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/catbreed">
          <Breed data={data} setData={setData} />
        </Route>
        <Route path="/Shop">
          <Shop items={items} setItems={setItems} data={data} setData={setData} prices={prices} setPrices={setPrices}/>
        </Route>
        <Route path="/Cart">
          <Cart items={items} setItems={setItems} prices={prices} setPrices={setPrices}/>
        </Route>
        <Route exact path="/"></Route>
      </Switch>
    </Router>
  );
};



export default App;
