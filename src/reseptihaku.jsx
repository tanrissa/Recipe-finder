import { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  async function searchRecipes() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    const data = await response.json();
    setRecipes(data.meals || []);
  }

  return (
    <>
      <h1>Search recipes</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={searchRecipes}>
        Search
      </button>

      {recipes.map((recipe) => (
        <Link
        key={recipe.idMeal}
        to={`/recipe/${recipe.idMeal}`}
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

export default Search;