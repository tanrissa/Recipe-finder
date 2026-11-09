import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import Search from "./reseptihaku.jsx";
import RecipeDetails from "./reseptintiedot.jsx";
import Favorites from "./suosikit.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipe/:id"element={<RecipeDetails />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </BrowserRouter>
  );

}