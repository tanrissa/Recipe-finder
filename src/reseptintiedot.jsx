import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();

  return (
    <>
      <h1>Resepti</h1>
      <p>ID: {id}</p>
    </>
  );
}

export default RecipeDetails;