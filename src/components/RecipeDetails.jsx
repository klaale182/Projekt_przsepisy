import React from 'react';
import '../RecipeDetails.css';

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <h2>Szczegóły Przepisu</h2>
      <h3>{recipe.title}</h3>
      <p><strong>Składniki:</strong> {recipe.ingredients}</p>
      <p><strong>Kroki przygotowania:</strong></p>
      <p>{recipe.steps}</p>
    </div>
  );
};

export default RecipeDetails;