import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0)

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
          <img
          src="https://via.placeholder.com/150"
          alt="Recipe 1"
          width="150"
          />

          <img
          src="https://via.placeholder.com/150"
          alt="Recipe 2"
          width="150"
          />

          <img
          src="https://via.placeholder.com/150"
          alt="Recipe 3"
          width="150"
           />
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
          <img
          src="https://via.placeholder.com/150"
          alt="Recipe 1"
          width="150"
          />

          <img
          src="https://via.placeholder.com/150"
          alt="Recipe 2"
          width="150"
          />

          <img
          src="https://via.placeholder.com/150"
          alt="Recipe 3"
          width="150"
           />
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
