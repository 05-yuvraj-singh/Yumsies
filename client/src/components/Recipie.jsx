import React, { useState } from 'react';
import { FaHeart, FaCommentDots } from 'react-icons/fa'; // Importing heart and comment icons

const imgUrl = "https://images.unsplash.com/photo-1727324735318-c25d437052f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const recipe = {
  img: imgUrl,
  title: "Butter Chicken Masala",
  description: "Butter Chicken Masala with tasty gravy",
  ingredients: ["Butter", "Chicken", "Masala"],
  instructions: ["Take butter", "Put chicken", "Serve it well"],
  dateOfUpload: "2024-02-18",
  likes: 120, // Initial number of likes
  comments: [] // Array of comments (empty for now)
};

function Recipe() {
  const [showDescription, setShowDescription] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [liked, setLiked] = useState(false); // State to manage like status
  const [likeCount, setLikeCount] = useState(recipe.likes); // Initialize like count

  // Toggle the like button and update the like count
  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1); // Decrease like count if already liked
    } else {
      setLikeCount(likeCount + 1); // Increase like count if not liked
    }
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">{recipe.title}</h2>
        
        <img 
          className="w-full h-64 object-cover rounded-md mb-6" 
          src={recipe.img} 
          alt={recipe.title} 
        />
        
        {/* Description Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowDescription(!showDescription)}>
            <h3 className="font-semibold text-gray-800">Description</h3>
            <span>{showDescription ? '-' : '+'}</span>
          </div>
          {showDescription && (
            <p className="text-gray-700 text-sm mt-2">{recipe.description}</p>
          )}
        </div>

        {/* Ingredients Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowIngredients(!showIngredients)}>
            <h3 className="font-semibold text-gray-800">Ingredients</h3>
            <span>{showIngredients ? '-' : '+'}</span>
          </div>
          {showIngredients && (
            <ol className="list-decimal ml-6 mt-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ol>
          )}
        </div>

        {/* Instructions Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowInstructions(!showInstructions)}>
            <h3 className="font-semibold text-gray-800">Instructions</h3>
            <span>{showInstructions ? '-' : '+'}</span>
          </div>
          {showInstructions && (
            <ol className="list-decimal ml-6 mt-2">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700">{instruction}</li>
              ))}
            </ol>
          )}
        </div>

        {/* Like and Comment Buttons */}
        <div className="flex items-center justify-start space-x-8 mt-4"> {/* Increased horizontal spacing */}
          {/* Heart Like Button */}
          <button onClick={handleLikeClick} className="flex items-center space-x-2">
            <FaHeart 
              className={`w-6 h-6 ${liked ? 'text-red-500' : 'text-gray-400'}`} // Filled red heart when liked, gray when not liked
            />
            <span className="text-gray-600 text-sm">{likeCount}</span> {/* Display only the number */}
          </button>

          {/* Comment Button */}
          <button>
            <FaCommentDots className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        {/* Uploaded On Section */}
        <p className="text-gray-500 text-xs mt-8 text-right">Uploaded on: {recipe.dateOfUpload}</p>
      </div>
    </div>
  );
}

export default Recipe;
