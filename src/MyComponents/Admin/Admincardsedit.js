import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Admincardsedit = () => {
  const location = useLocation();
  const { items } = location.state || { items: [] }; // Default to an empty array if items is not provided
  const [ItemCards, setItemCards] = useState(items);

  useEffect(() => {
    setItemCards(items);
  }, [items]);

  const handleDelete = (index) => {
    const updatedCards = ItemCards.filter((_, i) => i !== index);
    setItemCards(updatedCards);
  };

  const handleUpdate = (updatedItems) => {
    setItemCards(updatedItems);
    // Optionally, save to the server or update the parent component if needed
  };

  return (
    <div className="hide-scrollbar border-2 rounded-xl mt-4 sm:mx-20 p-4 bg-gray-50 shadow-lg overflow-x-auto md:overflow-x-hidden md:overflow-y-hidden flex md:flex-wrap items-center justify-center md:justify-start  ">
      {ItemCards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col border-2 border-gray-200 p-2 mr-4 mt-4 rounded-lg shadow-lg bg-white w-64"
        >
          <div className="flex justify-between mb-2">
            <button className="bg-yellow-400 text-white px-2 py-1 rounded-lg hover:bg-yellow-500 transition duration-300">
              Edit Card
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition duration-300"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
          <a
            href={`#${card.name}`}
            className="flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={card.imageId}
              alt={card.name}
              className="rounded-xl w-20 h-20 object-cover mt-2 max-w-full"
            />
            <p className="text-sm font-medium mt-2">{card.name}</p>
            <p className="text-xs text-gray-700 mt-1">{card.type}</p>
          </a>
          <form className="mt-2">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col">
                <label className="text-xs font-medium">Upload IMG</label>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-1 p-1 border rounded-lg"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-xs font-medium">Change Card Name</label>
                <input
                  type="text"
                  className="mt-1 p-1 border rounded-lg"
                  value={card.name}
                  onChange={(e) => {
                    const updatedCards = [...ItemCards];
                    updatedCards[index].name = e.target.value;
                    handleUpdate(updatedCards);
                  }}
                />
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-xs font-medium">Change Type</label>
                <input
                  type="text"
                  className="mt-1 p-1 border rounded-lg"
                  value={card.type}
                  onChange={(e) => {
                    const updatedCards = [...ItemCards];
                    updatedCards[index].type = e.target.value;
                    handleUpdate(updatedCards);
                  }}
                />
              </div>
              <button className="mt-2 bg-blue-500 text-white p-1 rounded-lg hover:bg-blue-600 transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
};
