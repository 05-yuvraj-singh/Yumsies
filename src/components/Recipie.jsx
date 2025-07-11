import React, { useState } from 'react';
import { FaHeart, FaCommentDots } from 'react-icons/fa';

function Recipe({ data }) {
  const [showDescription, setShowDescription] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(data.likes?.length || 0);

  const handleLikeClick = () => {
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
    setLiked(!liked);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-2xl p-6 sm:p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 mb-6">
          {data.title}
        </h2>

        <img
          className="w-full h-56 sm:h-64 object-cover rounded-md mb-6"
          src={data.imageUrl?.[0] || 'https://via.placeholder.com/600x400.png?text=No+Image'}
          alt={data.title}
        />

        {/* Description */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowDescription(!showDescription)}
          >
            <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Description</h3>
            <span className="text-xl">{showDescription ? '-' : '+'}</span>
          </div>
          {showDescription && (
            <p className="text-gray-700 text-sm sm:text-base mt-2">{data.description}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowIngredients(!showIngredients)}
          >
            <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Ingredients</h3>
            <span className="text-xl">{showIngredients ? '-' : '+'}</span>
          </div>
          {showIngredients && (
            <ol className="list-decimal ml-6 mt-2 text-sm sm:text-base">
              {data.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ol>
          )}
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowInstructions(!showInstructions)}
          >
            <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Instructions</h3>
            <span className="text-xl">{showInstructions ? '-' : '+'}</span>
          </div>
          {showInstructions && (
            <ol className="list-decimal ml-6 mt-2 text-sm sm:text-base">
              {data.instructions.map((step, index) => (
                <li key={index} className="text-gray-700">{step}</li>
              ))}
            </ol>
          )}
        </div>

        {/* Like & Comment */}
        <div className="flex items-center justify-start space-x-8 mt-4">
          <button onClick={handleLikeClick} className="flex items-center space-x-2">
            <FaHeart className={`w-6 h-6 ${liked ? 'text-red-500' : 'text-gray-400'}`} />
            <span className="text-gray-600 text-sm">{likeCount}</span>
          </button>
          <button>
            <FaCommentDots className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        <p className="text-gray-500 text-xs mt-8 text-right">
          Uploaded on: {new Date(data.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default Recipe;
