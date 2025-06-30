import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Recipe from '../../components/Recipie.jsx';
import axios from 'axios';

function Feed() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          'https://yumsies-microservices-1.onrender.com/api/recipies/get-recipies'
        );
        setRecipes(response.data);
      } catch (err) {
        setError('Failed to fetch recipes.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-4">
        {loading && <p>Loading recipes...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {recipes.map((recipe) => (
          <Recipe key={recipe._id} data={recipe} />
        ))}
      </div>
    </>
  );
}

export default Feed;
