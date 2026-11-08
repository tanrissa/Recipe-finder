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
          <h1>Reseptikirjasto</h1>
          <p>
            <em>
            Tämä on reseptikirjasto, josta voit etsiä ja tallentaa suosikkireseptejäsi. 
          </em>
          </p>
        </div>
      </section>



      <section id="favorites">
         <article className="card mb-3">
          <div className="card-body">
            <h2>Omat suosikit</h2>
          <div className="d-flex justify-content-center gap-3 mb-3">
          <img
          src="https://via.placeholder.com/150"
          alt="Resepti 1"
          width="150"
          />

          <img
          src="https://via.placeholder.com/150"
          alt="Resepti 2"
          width="150"
          />

          <img
          src="https://via.placeholder.com/150"
          alt="Resepti 3"
          width="150"
           />
          </div>

         <button className="btn btn-primary">
          Tarkastele kaikkia omia suosikkejasi
           </button>
         </div>
        </article>
      </section>
  
   <section id="selaa">
         <article className="card mb-3">
          <div className="card-body">
            <h2>Kaikki reseptit</h2>
          <div className="d-flex justify-content-center gap-3 mb-3">
          <img
          src="https://via.placeholder.com/150"
          alt="Resepti 1"
          width="150"
          />

          <img
          src="https://via.placeholder.com/150"
          alt="Resepti 2"
          width="150"
          />

          <img
          src="https://via.placeholder.com/150"
          alt="Resepti 3"
          width="150"
           />
          </div>

          <Link to="/search">
            <button className="btn btn-primary">
             Hae reseptejä
            </button>
          </Link>
         
         </div>
        </article>
      </section>


</>
  )
}

export default Home
