import React, { useState } from 'react';
import '../RecipeForm.css';

const RecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) return;
    const newRecipe = { title, ingredients, steps };
    addRecipe(newRecipe);
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nazwa przepisu" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Składniki (oddzielone przecinkami)" 
        value={ingredients} 
        onChange={(e) => setIngredients(e.target.value)} 
      />
      <textarea 
        placeholder="Kroki przygotowania" 
        value={steps} 
        onChange={(e) => setSteps(e.target.value)} 
      />
      <button type="submit">Dodaj przepis</button>
    </form>
  );
};

export default RecipeForm;