const Dish = ({ title, description, price, image, slug, stock }) => {
  return (
    <article className="dish">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <img src={image} alt={title} />
      <p>{slug}</p>
      <p>{stock}</p>
    </article>
  );
};

export default Dish;
