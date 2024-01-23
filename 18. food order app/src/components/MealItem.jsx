export default function MealItem({ meal, onAddCart }) {
  const handleAddEvent = (event) => {
    onAddCart(meal);
  };
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <h3>{meal.name}</h3>
        <span className="meal-item-price">${meal.price}</span>
        <p className="meal-item-description">{meal.description}</p>
        <button className="button" onClick={handleAddEvent}>
          Add to Cart
        </button>
      </article>
    </li>
  );
}
