
import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

export const Admineditcategory = () =>{
    const [cards, setCards] = useState([]);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [originalCards, setOriginalCards] = useState([]);
  
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
  
    const handleImageChange = (e, index) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageUrl = reader.result;
  
          // Create a copy of the cards array
          const updatedCards = [...cards];
  
          // Update the imageId of the card at the given index
          updatedCards[index].imageId = imageUrl;
  
          // Set the updated cards array to state
          setCards(updatedCards);
  
          // Update the local image state if needed
          setImageUrl(imageUrl);
          setImage(file);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleSubmit = () => {
      // Send the updated cards to the server
      axios
        .post("https://jsonplaceholder.typicode.com/posts", { cards })
        .then((response) => {
          console.log("Response from JsonPlaceholder:", response.data);
  
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
        { name: `New Category ${cards.length + 1}`, imageId: "" },
      ]);
    };
  
    const handleReset = () => {
      console.log("Original cards before reset:", originalCards); // this line is for testing
      console.log("Cards before reset:", cards); // this line is for testing
      setCards(_.cloneDeep(originalCards)); // Reset cards to the deep-copied original state
      console.log("Original cards after reset:", originalCards); // this line is for testing
      console.log("Cards after reset:", cards); // this line is for testing
    };
  
    return (
      <div className="category mt-8">
        <div className="h-72">
          <div className="h-12 sm:mx-20 flex md:justify-between justify-center flex-wrap items-center">
            <p className="text-3xl font-bold md:ml-20 ml-10">Category</p>
            <div className="flex space-x-2">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                onClick={handleAddCard}
              >
                Add Card
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                onClick={handleSubmit}
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
          <div className="hide-scrollbar border-2 rounded-xl mt-4 sm:mx-20 p-4 bg-gray-50 shadow-lg overflow-x-auto md:overflow-x-hidden md:overflow-y-hidden flex flex-wrap items-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col border-2 border-gray-200 p-4 mr-8 mt-4 rounded-lg shadow-lg bg-white w-72"
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
                </a>
  
                <form className="mt-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-col">
                      <label className="text-sm font-medium">Upload IMG</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          handleImageChange(e, index);
                        }}
                        className="mt-1 p-1 border rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col mt-2">
                      <label className="text-sm font-medium">
                        Change Category Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-1 border rounded-lg"
                        value={card.name}
                        onChange={(e) => {
                          const updatedCards = [...cards];
                          updatedCards[index].name = e.target.value;
                          setCards(updatedCards);
                        }}
                      />
                    </div>
                    <button className="mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
