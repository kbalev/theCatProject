import { List } from "./List";
import styled from "styled-components";
import cat from "./catInACart.jpg"
const StyledContainer = styled.div`
.container{
  background-color: rgb(240, 243, 233);
}
`;

export const Cart = ({ items, setItems, prices, setPrices }) => {
  const handleRemove = (itemIndex) => {
    let newArray = [...items];
    let newArray2 = [...prices];
    newArray.splice(itemIndex, 1);
    newArray2.splice(itemIndex, 1);
    setItems(newArray);
    setPrices(newArray2);
  };

  return (
    <StyledContainer>
      <div className="container">
        <div className="header">
          <h1>Time to take the kittens home</h1>
          <img src={cat} alt="Mama taking her kitty off to market." />
        </div>
        <div className="wrapper">
          {items.length > 0 && (
            <List items={items} prices={prices} handleRemove={handleRemove} />
          )}
        </div>
      </div>
    </StyledContainer>
  );
};

export default Cart;
