import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Admincontext from './Admincontext';
import _ from "lodash";
import axios from "axios";

export const Admincardsedit = () => {
  const location = useLocation();
  const { items, index } = location.state || { items: [], index: null };
  const [ItemCards, setItemCards] = useState(items);
  const { cards, setCards } = useContext(Admincontext);
  const [originalItems, setOriginalItems] = useState(_.cloneDeep(items));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/d072f4ff-f78a-4bb1-ba68-29792825b177"
        );
        const data = await response.json();
        const transformedData = Object.keys(data).map((key) => ({
          name: key,
          imageId: data[key].imageId,
          items: data[key].items,
        }));
        setCards(transformedData);

        console.log("Fetched and transformed data:", transformedData); // This line is for testing
      } catch (error) {
        console.log("error fetching the data", error);
      }
    };
    fetchData();
  }, [setCards]);

  useEffect(() => {
    setItemCards(items);
    setOriginalItems(_.cloneDeep(items));
  }, [items]);

  const handleDelete = (itemIndex) => {
    const updatedItems = ItemCards.filter((_, i) => i !== itemIndex);
    setItemCards(updatedItems);
    updateCardsInContext(updatedItems);
  };

  const handleAddCard = () => {
    // Create a new card object
    const newCard = {
      title: "",
      imageId: "", // You may set some default image or leave it empty
      type: ""
    };
    console.log([...ItemCards, newCard]);
    // Update ItemCards state by adding the new card
    setItemCards([...ItemCards, newCard]);
  };

  const handleUpdate = (updatedItems) => {
    setItemCards(updatedItems);
    updateCardsInContext(updatedItems);
  };

  const handleReset = () => {
    setItemCards(_.cloneDeep(originalItems));
    updateCardsInContext(_.cloneDeep(originalItems));
  };

  const updateCardsInContext = (updatedItems) => {
    const updatedCards = cards.map((card, cardIndex) =>
      cardIndex === index ? { ...card, items: updatedItems } : card
    );

    setCards(updatedCards);
  };

  const handleSaveChange = () => {
    // Send the updated cards to the server
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { cards })
      .then((response) => {
        console.log("Response from JsonPlaceholder:", response.data);
        setOriginalItems(_.cloneDeep(ItemCards));
      })
      .catch((error) => {
        console.log("Error sending data:", error);
      });
  };

  const handleImageChange = (e, itemIndex) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;

        // Update the ItemCards state with the new image URL
        const updatedItems = [...ItemCards];
        updatedItems[itemIndex].imageId = imageUrl;
        setItemCards(updatedItems);
        
        // Reflect changes in the context
        updateCardsInContext(updatedItems);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='h-72'>
      <div className="h-12 sm:mx-20 flex md:justify-between justify-center flex-wrap items-center">
        <p className="text-3xl font-bold md:ml-20 ml-10">Category Items</p>
        <div className="flex space-x-2">
          <button onClick={handleAddCard}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Add Card
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSaveChange}
          >
            Save Change
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="hide-scrollbar border-2 rounded-xl mt-4 sm:mx-20 p-4 bg-gray-50 shadow-lg overflow-x-auto md:overflow-x-hidden md:overflow-y-hidden flex md:flex-wrap items-center justify-center md:justify-start">
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
              href={`#${card.title}`}
              className="flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={card.imageId}
                alt={card.name}
                className="rounded-xl w-20 h-20 object-cover mt-2 max-w-full"
              />
              <p className="text-sm font-medium mt-2">{card.title}</p>
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
                    onChange={(e) => handleImageChange(e, index)}
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label className="text-xs font-medium">Change Card</label>
                  <input
                    type="text"
                    className="mt-1 p-1 border rounded-lg"
                    value={card.title}
                    onChange={(e) => {
                      const updatedCards = [...ItemCards];
                      updatedCards[index].title = e.target.value;
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
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};
