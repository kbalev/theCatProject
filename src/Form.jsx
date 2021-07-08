import { useState } from "react";

export const Form = ({ submitFunction }) => {
  const [input, setInput] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFunction(input);
    setInput(``);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button type="submit">+</button>
    </form>
  );
};
