import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="header">
        <div className="hero">
        </div>
        <div>
          <h1>Reseptikirjasto</h1>
          <p>
            Tämä on reseptikirjasto, josta voit etsiä ja tallentaa suosikkireseptejäsi. 
          </p>
        </div>
      </section>

      <section id="center">
        <div className="hero"> 
          <h2>Omat suosikit</h2>
          <p>
            Selaa reseptejä
          </p>
        </div>
      </section>

      
    </>
  )
}

export default App
