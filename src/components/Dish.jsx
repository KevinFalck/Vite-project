const Dish = ({ title, price, image }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{price}</p>
      <img src={image} alt={title} />
    </article>
  );
};

export default Dish;
