import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Admincontext from "./Admincontext";
import axios from "axios";
import _ from "lodash";

export const Admincardsedit = () => {
  const location = useLocation();
  const { index } = location.state || { index: null };
  const { cards, setCards } = useContext(Admincontext);
  const [ItemCards, setItemCards] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (index !== null) {
      fetchData();
    }
  }, [index]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/menu");
      const data = await response.json();
      const filteredData = filterIdFromData(data);
      const transformedData = Object.keys(filteredData).map((key) => ({
        name: key,
        imageId: filteredData[key].imageId,
        items: filteredData[key].items,
      }));
      setCards(transformedData);
      setOriginalItems(_.cloneDeep(transformedData[index].items));
      setItemCards(transformedData[index].items);
    } catch (error) {
      console.log("Error fetching the data", error);
    }
  };

  const filterIdFromData = (data) => {
    const filteredData = {};
    Object.keys(data).forEach((key) => {
      if (key !== "_id" && key !== "__v") {
        if (Array.isArray(data[key])) {
          filteredData[key] = data[key].map((item) => filterIdFromData(item));
        } else if (typeof data[key] === "object") {
          filteredData[key] = filterIdFromData(data[key]);
        } else {
          filteredData[key] = data[key];
        }
      }
    });
    return filteredData;
  };

  const handleSaveChange = () => {
    const updatedCards = [...cards];
    updatedCards[index].items = ItemCards;
    setCards(updatedCards);
    axios
      .post("http://localhost:2580/addMenu", updatedCards)
      .then((response) => {
        console.log("Data saved successfully:", response.data);
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
        const updatedItems = [...ItemCards];
        updatedItems[itemIndex].imageId = imageUrl;
        setItemCards(updatedItems);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditCardContent = (card, itemIndex) => {
    navigate("/Admincardscontent", {
      state: {
        ...card,
        itemIndex,
        categoryIndex: index, // Pass the category index as well
      },
    });
  };

  const handleAddCard = () => {
    const newCard = {
      title: "",
      imageId: "",
      type: "",
    };
    setItemCards([...ItemCards, newCard]);
  };

  const handleReset = () => {
    setItemCards(_.cloneDeep(originalItems));
  };

  const handleDelete = (itemIndex) => {
    const updatedItems = ItemCards.filter((_, i) => i !== itemIndex);
    setItemCards(updatedItems);
  };

  return (
    <div className="h-72">
      <div className="h-12 sm:mx-20 flex md:justify-between justify-center flex-wrap items-center">
        <p className="text-3xl font-bold md:ml-20 ml-10">Category Items Edit</p>
        <div className="flex space-x-2">
          <button
            onClick={handleAddCard}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105"
          >
            Add Card
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            onClick={handleSaveChange}
          >
            Save Change
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition duration-300 transform hover:scale-105"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="hide-scrollbar border-2 rounded-xl mt-4 sm:mx-20 p-4 bg-gray-50 shadow-lg overflow-x-auto md:overflow-x-hidden md:overflow-y-hidden flex flex-wrap items-center justify-center md:justify-start gap-4">
        {ItemCards.map((card, index) => (
          <div
            key={index}
            className="gradient-border transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="content">
              <div className="flex justify-between mb-2">
                <button
                  className="bg-yellow-400 text-black px-2 py-1 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 text-xs sm:text-sm"
                  onClick={() => handleEditCardContent(card, index)}
                >
                  Edit Card content
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-lg shadow-md hover:bg-red-600 transition duration-300 text-xs sm:text-sm"
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
                  className="rounded-xl w-16 h-16 sm:w-20 sm:h-20 object-cover mt-2 max-w-full"
                />
                <p className="text-xs sm:text-sm font-medium mt-2">
                  {card.title}
                </p>
                <p className="text-xs text-gray-700 mt-1">{card.type}</p>
              </a>
              <form className="mt-2 sm:mt-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col">
                    <label className="text-xs sm:text-sm font-medium">
                      Upload IMG
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      className="mt-1 p-1 border border-gray-300 rounded-md text-xs sm:text-sm text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                      onChange={(e) => handleImageChange(e, index)}
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="text-xs sm:text-sm font-medium">
                      Change Card
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-1 border rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={card.title}
                      onChange={(e) => {
                        const updatedCards = [...ItemCards];
                        updatedCards[index].title = e.target.value;
                        setItemCards(updatedCards);
                      }}
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="text-xs sm:text-sm font-medium">
                      Change Type
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-1 border rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={card.type}
                      onChange={(e) => {
                        const updatedCards = [...ItemCards];
                        updatedCards[index].type = e.target.value;
                        setItemCards(updatedCards);
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
