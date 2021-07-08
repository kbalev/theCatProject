import './App.css';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import{Page,Pages} from "./cat_pages.jsx"
const App = () =>{
  const [data,setdata]= useState([]);
  
  const [error,seterror]= useState({error:false, message:""})
  const [loading,setloading]= useState(true)
  
  useEffect(() => {
    handleFetch();
  },[]);

  const handleFetch = async() =>{
    try{
    const response = await fetch( "https://api.thecatapi.com/v1/breeds");
    
    if(response.status !== 200){
      throw new error("oops!");
    }
    const data = await response.json();
    
    setdata(data);
    setloading(false)
    }catch (error){
      console.log(error)
      seterror({error:true,message:error.message})
    }
  };
  return(
    <Router>
    <Pages data = {data} />
    </Router>
  )
}

export default App;
