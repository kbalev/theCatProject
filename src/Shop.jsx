import { Form } from "./Form";
import { useState, useEffect } from "react";

export const Shop = ({items, setItems, data, setData}) => {
  

  const handleItem = (newItem, newPrice) => {
    setItems([...items, {name: newItem,
      price: newPrice}
    ]);
  };

  const handleRemove = (itemIndex) => {
    let newArray = [...items];
    newArray.splice(itemIndex, 1)
    setItems(newArray)
  }

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
            <div className="header">
                <h1>Beginnings of the shop front</h1>
                <h2>Should eventually use the same state across shop and Cart</h2>
                <p>Input your text to add it to the list and check your list when you go to the Cart</p>
            </div>
            <div className="wrapper">
                <Form submitFunction={handleItem} />
            </div>
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
              </div>
              <div className="breed-info">
                <h3 className="breed-name">{breed.name}</h3>
                <p className="catPrice">£3.50</p>
                <button type="button" onClick={()=>{handleItem(breed.name, 3.5)}}>Add to cart</button>
              </div>
            </div>
          ))}
      </div>
            
        </div>
  );
  }
}
