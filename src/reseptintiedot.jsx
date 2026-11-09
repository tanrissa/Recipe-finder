import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    async function fetchRecipe() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const data = await response.json();

  setRecipe(data.meals[0]);

  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  setIsFavorite(
    favorites.some(
      (fav) => fav.idMeal === data.meals[0].idMeal
    )
  );
}

    fetchRecipe();
  }, [id]);

function toggleFavorite() {
  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  if (isFavorite) {
    const updated = favorites.filter(
      (fav) => fav.idMeal !== recipe.idMeal
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    setIsFavorite(false);
  } else {
    favorites.push(recipe);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    setIsFavorite(true);
  }
}

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{recipe.strMeal}</h1>
      <button
  className={
    isFavorite
      ? "btn btn-danger"
      : "btn btn-success"
  }
  onClick={toggleFavorite}
>
  {isFavorite
    ? "🗑 Remove from Favorites"
    : "❤️ Add to Favorites"}
</button>


    <div className="recipe-top">
      <img
        className="recipe-image"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width="400"
        />
    <div className="ingredients">
     <h2>Ingredients</h2>

    <ul>
        {Array.from({ length: 20 }, (_, i) => i + 1)
        .filter(
         (i) =>
        recipe[`strIngredient${i}`] &&
        recipe[`strIngredient${i}`].trim() !== ""
        )
        .map((i) => (
            <li key={i}>
                 {recipe[`strMeasure${i}`]}{" "}
                {recipe[`strIngredient${i}`]}
            </li>
         ))}
    </ul>
</div>
</div>
<br />
      <h2>Recipe</h2>
      <p>{recipe.strInstructions}</p>
    </>
  );
}



export default RecipeDetails;