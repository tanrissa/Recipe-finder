import { Link } from "react-router-dom";

function Favorites() {

  const favorites =
    JSON.parse(localStorage.getItem("favorites"))
    || [];

  return (
    <>
      <h1>My Favorites</h1>

      {favorites.map((recipe) => (
  <Link
    key={recipe.idMeal}
    to={`/recipe/${recipe.idMeal}`}
    style={{
      textDecoration: "none",
      color: "inherit"
    }}
  >
    <div>
      <img
        src={recipe.strMealThumb}
        width="200"
        alt={recipe.strMeal}
      />

      <h2>{recipe.strMeal}</h2>
    </div>
  </Link>
))}
    </>
  );
}

export default Favorites;