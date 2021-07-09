import {useState, useEffect} from 'react';
import CatData from './CatData';
import './Rescue.css';

const Rescue = () => {
    const[data, setData] = useState('');
    const [error, setError] = useState({error: false, message: ''});

    useEffect(() => {
      handleFetch();

    }, []);

    const handleFetch = async () => {
       try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&mime_types=jpg&order=ASC&breed=true');

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
  
      let breed = [...data];
    for (let i = 0; i < breed.length; i++) {
      breed[i].price = CatData[i].price;
      breed[i].name = CatData[i].name;
      breed[i].desc = CatData[i].description;
    }

    console.log(breed);

      return (
        <div className="container">
          <h2 className="title">Rescue Cats Needing Homes</h2>
          {breed
            .map((breed) => (
              <div className="cat-container" key={breed.id}>
                  {breed.url && (
                    <img className="thumbnail" alt="" src={breed.url} />
                  )}
                  <div className='purchase'>
                  <p>{breed.desc}</p>
                  
                  <div className='cats'>
                   <h3>{breed.name}</h3> 
                <h3 className='price'>£{breed.price}</h3>
                </div>
                </div>
              </div>
            ))}
        </div>
      );
  };
  }

export default Rescue;
