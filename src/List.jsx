import { Card } from "./Card";

export const List = ({ items, handleRemove, price }) => {
  return (
    <ul>
      {items.map((item, index, price) => {
        return <Card key={index} rmFunction={() => handleRemove(index)}>{item}</Card>;
      })}
    </ul>
  );
};
