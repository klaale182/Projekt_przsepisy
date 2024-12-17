import React, { useState } from 'react';
import '../IngredientSearch.css';

const IngredientSearch = ({ recipes }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchRecipes = () => {
    const filtered = recipes.filter((recipe) =>
      recipe.ingredients.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="ingredient-search">
      <h2>Wyszukiwarka Przepisów</h2>
      <input 
        type="text" 
        placeholder="Wprowadź składniki" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={searchRecipes}>Szukaj</button>
      <div className="search-results">
        {results.map((recipe, index) => (
          <div key={index} className="search-item">
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientSearch;