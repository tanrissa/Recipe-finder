import './App.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const [randomRecipes, setRandomRecipes] = useState([]);
const favorites =
  JSON.parse(localStorage.getItem("favorites")) || [];
  const favoritePreview = favorites.slice(0, 3);

useEffect(() => {
  async function fetchRandomRecipes() {
    const recipes = [];

    for (let i = 0; i < 3; i++) {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      const data = await response.json();
      recipes.push(data.meals[0]);
    }

    setRandomRecipes(recipes);
  }

  fetchRandomRecipes();
}, []);


  return (
    <>
      <section id="header">
        <div className="hero">
        </div>
        <div>
          <h1>Recipe Book</h1>
          <p>
            <em>
            This is a recipe book where you can search and save your favorite recipes. 
          </em>
          </p>
        </div>
      </section>



      <section id="favorites">
         <article className="card mb-3">
          <div className="card-body">
            <h2>My Favorites</h2>
          <div className="d-flex justify-content-center gap-3 mb-3">
          {favoritePreview.map((recipe) => (
             <img
                key={recipe.idMeal}
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                width="150"
             />
          ))}
            </div>
        <Link to="/favorites">
         <button className="btn btn-primary">
          View Favorites
           </button>
           </Link>
         </div>
        </article>
      </section>
  
   <section id="selaa">
         <article className="card mb-3">
          <div className="card-body">
            <h2>All Recipes</h2>
          <div className="d-flex justify-content-center gap-3 mb-3">
          {randomRecipes.map((recipe) => (
            <img
            key={recipe.idMeal}
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            width="150"
            />
            ))}
          </div>
          <Link to="/search">
            <button className="btn btn-primary">
             Search Recipes
            </button>
          </Link>
         
         </div>
        </article>
      </section>


</>
  )
}

export default Home
