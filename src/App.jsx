import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import IngredientSearch from './components/IngredientSearch';
import Navbar from './components/Navbar';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipes, setRecipes] = useState(() => {
    const storedRecipes = localStorage.getItem('recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : [];
  });

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    toast.success('Przepis dodany!');
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
    toast.info('Przepis usunięty!');
  };

  return (
    <Router>
      <div className="app-container">
        <h1>Kreator Przepisów Kulinarne</h1>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<RecipeList recipes={recipes} deleteRecipe={deleteRecipe} setSelectedRecipe={setSelectedRecipe} />}
          />
          <Route path="/add" element={<RecipeForm addRecipe={addRecipe} />} />
          <Route path="/search" element={<IngredientSearch recipes={recipes} />} />
          <Route path="/details" element={selectedRecipe && <RecipeDetails recipe={selectedRecipe} />} />
        </Routes>
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
