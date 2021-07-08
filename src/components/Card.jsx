export const Card = ({ children, rmFunction, price }) => {
  return <li>
    <span>{children}</span>
    <p>£{price}.00</p>
    <button onClick={rmFunction}>X</button>
  </li>;
};
