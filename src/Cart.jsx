import { List } from "./List";

export const Cart = ({items, setItems}) => {
  


  const handleRemove = (itemIndex) => {
    let newArray = [...items];
    newArray.splice(itemIndex, 1)
    setItems(newArray)
  }

  return (
    <div className="container">
            <div className="header">
                <h1>This is The Cart</h1>
                <h2>Currently using the same state across Shop and Cart</h2>
                <p>click on "x" of an item to remove it from the cart.</p>
            </div>
            <div className="wrapper">
                {items.length > 0 && <List items={items} handleRemove={handleRemove} />}
            </div>
        </div>
  );
};


export default Cart