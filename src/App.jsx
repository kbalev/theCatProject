
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Breed from './component-breeds/catbreed';
import Rescue from './component-rescue/Rescue';
import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import Navbar from "./components/Navbar";
import { Shop } from "./Shop";
import { Cart } from "./Cart"

const App  = () => {
const[data, setData] = useState('');
const [prices, setPrices] = useState('')
const [items,setItems] = useState([])
const [error, setError] = useState({error: false, message: ''});
  
      useEffect(() => {
        handleFetch();
  
      }, []);
  
  const handleFetch = async () => {
          try {
          const response = await fetch('https://api.thecatapi.com/v1/breeds');
   
   
          if (response.status !== 200) {
            throw new error('Oops something went wrong')
          }
           const data = await response.json();
           setData(data);    

   
       } catch (error) {
         setError({error: true, message: error.message});
       }
     };
     if (error.error) {
      return <h1>An error has occured: {error.message}</h1>;
    } else {
      let cats= [...data];
      const CatImage = cats
        .filter((cat) => cat.image)
        .map((cat) => {
          return (
              <div >
                <img className='cat' src={cat.image.url} />
                <h2>{cat.name}</h2>
              </div>
        );
      });

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
          <li>
            <Link to='/Rescue'>Rescue</Link>
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
        <Route path="/Rescue">
          <Rescue />
        </Route>
        <Route exact path='/'>
        <h1>The beginnings of the Cat website</h1>
         <Carousel>{CatImage}</Carousel>
        </Route>
        <Route path="/Cart">
          <Cart items={items} setItems={setItems} prices={prices} setPrices={setPrices}/>
        </Route>
        <Route exact path="/"></Route>
      </Switch>
    </Router>
  );
};
};



export default App;
