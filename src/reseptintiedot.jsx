import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      const data = await response.json();
      setRecipe(data.meals[0]);
    }

    fetchRecipe();
  }, [id]);

  function addToFavorites() {
  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

   const exists = favorites.some(
    (fav) => fav.idMeal === recipe.idMeal
  );

  if (!exists) {
    favorites.push(recipe);
    console.log("Tallennettu:", recipe.strMeal);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }
}

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{recipe.strMeal}</h1>
      <button
  className="btn btn-success"
  onClick={addToFavorites}
>
  ❤️ Add to Favorites
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