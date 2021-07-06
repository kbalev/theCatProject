const Card = ({ id, name, description, image}) => {
  return (
    <li key={id}>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <img src={image.url} />
    </li>
  );
};

export default Card
