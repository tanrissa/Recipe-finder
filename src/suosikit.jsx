function Favorites() {

  const favorites =
    JSON.parse(localStorage.getItem("favorites"))
    || [];

  return (
    <>
      <h1>My Favorites</h1>

      {favorites.map((recipe) => (
        <div key={recipe.idMeal}>
          <img
            src={recipe.strMealThumb}
            width="200"
            alt={recipe.strMeal}
          />

          <h2>{recipe.strMeal}</h2>
        </div>
      ))}
    </>
  );
}

export default Favorites;