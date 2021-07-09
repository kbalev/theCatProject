import './catbreed.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';


const Breed = ({data, setData}) => {
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
      let breed = [...data];
      console.log(data);


    return (
      <div className="container">
        <h2 className="title">Cat Breeds</h2>
        {breed
          .filter((breed) => breed.image)
          .map((breed) => (
            <div className="breed-container" key={breed.id}>
              <div>
                {breed.image && (
                  <img className="thumbnail" alt="" src={breed.image.url} />
                )}
                <p className='temperament'>{breed.temperament}</p>
              </div>
              <div className="breed-stars">
              <h4>Energy Level</h4>
                <StarRatingComponent 
                value={breed.energy_level}
                name={breed.name}
                />
                <h4>Affection Level</h4>
                <StarRatingComponent
                  value={breed.affection_level}
                  name={breed.name}
                />
                <h4>Social Needs</h4>
                <StarRatingComponent
                  value={breed.social_needs}
                  name={breed.name}
                  />
              </div>
              <div className="breed-info">
                <h3 className="breed-name">{breed.name}</h3>
                <p className="blurb">{breed.description}</p>
              </div>
              <Link to={`/${breed.id}`}>More Info</Link>
              
            </div>
          ))}
      </div>
    );
};
}

export default Breed;
