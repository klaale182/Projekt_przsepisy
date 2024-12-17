import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../RecipeList.css';

const RecipeList = ({ recipes, deleteRecipe, setSelectedRecipe }) => {
  const navigate = useNavigate();

  const handleDetails = (recipe) => {
    setSelectedRecipe(recipe);
    navigate('/details');
  };

  return (
    <div className="recipe-list">
      <h2>Lista Przepisów</h2>
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-item">
          <h3>{recipe.title}</h3>
          <p><strong>Składniki:</strong> {recipe.ingredients}</p>
          <button onClick={() => handleDetails(recipe)}>Szczegóły</button>
          <button onClick={() => deleteRecipe(index)}><FaTrash /> Usuń</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
