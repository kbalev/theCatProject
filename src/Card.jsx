export const Card = ({ children, rmFunction }) => {
  return <li>
    <span>{children}</span>
    <button onClick={rmFunction}>X</button>
  </li>;
};
