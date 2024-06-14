import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import Admincontext from "./Admincontext";

export const Admineditcategory = () => {
  const { cards, setCards, originalCards, setOriginalCards } =
    useContext(Admincontext);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/get-json");
        const data = await response.json();
        const filteredData = filterIdFromData(data);
        const transformedData = Object.keys(filteredData).map((key) => ({
          name: key,
          imageId: filteredData[key].imageId,
          items: filteredData[key].items,
        }));
        setCards(transformedData);
        setOriginalCards(_.cloneDeep(transformedData)); // Store a deep copy of the original cards
        console.log("Fetched and transformed data:", transformedData); // This line is for testing
      } catch (error) {
        console.log("error fetching the data", error);
      }
    };
    fetchData();
  }, []);

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

  const handleImageChange = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "reactFoodApp");
      formData.append("cloud_name", "dzged7hmp");

      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/dzged7hmp/image/upload", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        const imageUrl = data.url;

        // Create a copy of the cards array
        const updatedCards = [...cards];

        // Update the imageId of the card at the given index
        updatedCards[index].imageId = imageUrl;

        // Set the updated cards array to state
        setCards(updatedCards);

        // Update the local image state if needed
        setImageUrl(imageUrl);
        setImage(file);
      } catch (error) {
        console.log("Error uploading image:", error);
      }
    }
  };



  const handleSaveChange = () => {
    // Send the updated cards to the server
    
    axios
      .post("http://localhost:3001/update-json", cards)
      .then((response) => {
        console.log("http://localhost:3001/update-json:", response.data);

        // Update the originalCards with a deep clone of the updated cards
        setOriginalCards(_.cloneDeep(cards));
      })
      .catch((error) => {
        console.log("Error sending data:", error);
      });
  };

  const handleDelete = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  const handleAddCard = () => {
    setCards([
      ...cards,
      { name: `New Category ${cards.length + 1}`, imageId: "", items: [] },
    ]);
  };

  const handleReset = () => {
    setCards(_.cloneDeep(originalCards)); // Reset cards to the deep-copied original state
  };

  const handleEditCard = (items, index) => {
    
    navigate("/Admincardsedit", { state: { items, index } });
    
  };

  return (
    <div className="category mt-8">
      <div className="h-72">
        <div className="h-12 sm:mx-20 flex md:justify-between justify-center flex-wrap items-center">
          <p className="text-3xl font-bold md:ml-20 ml-10 text-gray-700">
            Category Edit
          </p>
          <div className="flex space-x-2">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105"
              onClick={handleAddCard}
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
          {cards.map((card, index) => (
            <div
              key={index}
              className="gradient-border transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="content">
                <div className="flex justify-between mb-2">
                  <button
                    className="bg-yellow-400 text-black px-2 py-1 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 text-xs sm:text-sm"
                    onClick={() => handleEditCard(card.items, index)}
                  >
                    Edit Card
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-lg shadow-md hover:bg-red-600 transition duration-300 text-xs sm:text-sm"
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
                    className="rounded-xl w-16 h-16 sm:w-20 sm:h-20 object-cover mt-2 max-w-full"
                  />
                  <p className="text-xs sm:text-sm font-medium mt-2 text-gray-700">
                    {card.name}
                  </p>
                </a>
                <form className="mt-2 sm:mt-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-col">
                      <label className="text-xs sm:text-sm font-medium text-gray-600">
                        Upload IMG
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          handleImageChange(e, index);
                        }}
                        className="mt-1 p-1 border border-gray-300 rounded-md text-xs sm:text-sm text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                      />
                    </div>
                    <div className="flex flex-col mt-2">
                      <label className="text-xs sm:text-sm font-medium text-gray-600">
                        Change Category
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-1 border rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={card.name}
                        onChange={(e) => {
                          const updatedCards = [...cards];
                          updatedCards[index].name = e.target.value;
                          setCards(updatedCards);
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
    </div>
  );
};
