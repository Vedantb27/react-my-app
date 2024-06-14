import React from "react";

export const SavedBeforeEditCard = () => {
  return (
    <div className="m-auto bg-white p-6 rounded-lg shadow-lg max-w-xs">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-700">Saved before Edit Cards</h2>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414z"/>
          </svg>
        </button>
      </div>

      <div className="flex justify-between">
        <button className="w-full bg-green-500 text-white py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 mr-1">
          Save Changes
        </button>
        <button className="w-full bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ml-1">
          Close
        </button>
      </div>
    </div>
  );
};


