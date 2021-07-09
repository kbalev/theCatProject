import { useState, useEffect } from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
button{
  border: solid 1px gray;
  width: 70px;
  height: 50px;
  transition: linear 0.3s;
  box-sizing: content-box;
  padding: 0 5px 0 5px;
}

button:hover{
  border-radius: 25%;
  border-color: slategray;
  
}
.breed-info{
  display: flex;
  flex-flow: column;
  align-items: center;
}
`;

export const Shop = ({ items, setItems, data, setData, prices, setPrices }) => {
  const handleItem = (newItem, newPrices) => {
    setItems([...items, newItem]);
    setPrices([...prices, newPrices]);
  };
  const [error, setError] = useState({ error: false, message: "" });
  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/breeds");

      if (response.status !== 200) {
        throw new error("Oops something went wrong");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError({ error: true, message: error.message });
    }
  };

  if (error.error) {
    return <h1>An error has occured: {error.message}</h1>;
  } else {
    let breed = [...data];
    console.log(data);

    return (
      <StyledContainer>
        <div className="mainContainer">
          <div className="header">
          </div>
          <div className="container">
            <h2 className="title">Ye Olde Catte Shoppe</h2>
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
                    <p className="catPrice">
                      £{(breed.dog_friendly + 1) * 25}.00
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        handleItem(breed.name, (breed.dog_friendly + 1) * 25);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </StyledContainer>
    );
  }
};
