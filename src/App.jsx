import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Card from "./Card";
import Navbar from './components/Navbar';


const App = () => {
const [data, setData] = useState("");
const [loading, setLoading] = useState(true)
useEffect(
  ()=>{
    handleFetch()
  }, []
)
  const handleFetch = async () =>{
    const response = await fetch("https://api.thecatapi.com/v1/breeds")
    const data = await response.json()
    setData(data);
    setLoading(false);
  }
  let cats = [...data];

if (loading){
  return <h1>Loading</h1>
}
return(
  <Router>
   <Navbar />
    <div>
      <h1>The beginnings of the Cat website</h1>
    </div>
    <div>
    <h1>Pulling a fetch request</h1>
    <ul>
      {cats
          .filter((cat) => cat.image)
          .map((cat) => (
        <Card id={cat.id} name={cat.name} description={cat.description} image={cat.image.url}/>
      ))}
    </ul>
    <button onClick={handleFetch}>Click</button>
  </div>

  </Router>
)
}

export default App;
