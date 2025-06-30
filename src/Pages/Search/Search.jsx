import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Recipe from '../../components/Recipie';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounced fetch
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim()) {
        fetchRecipes(searchTerm);
      } else {
        setRecipes([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const fetchRecipes = async (term) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://yumsies-microservices-1.onrender.com/api/recipies/search-recepie?term=${encodeURIComponent(term)}`
      );
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 px-4 py-6">
        {/* Search input centered */}
        <div className="w-full flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search for recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-2xl px-4 py-2 border border-indigo-300 text-indigo-700 placeholder-indigo-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Search Results */}
        {loading ? (
          <p className="text-indigo-700 text-center">Searching...</p>
        ) : recipes.length === 0 && searchTerm ? (
          <p className="text-indigo-500 text-center">No results found.</p>
        ) : (
          <div className="flex flex-col gap-8">
            {recipes.map((recipe) => (
              <div key={recipe._id} className="w-full">
                <Recipe data={recipe} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
