import React from "react";
import { Cards } from "./Cards";

const CategoryList = () => {
  return (
    // Category List items
    <div className="categoryList w-1/4 h-full mt-6 mt-4 	">
      <h1 className="text-xl h-16  flex justify-center items-center bg-gradient-to-r from-green-200 to-blue-300 text-white shadow-md rounded-lg transform hover:scale-105 hover:bg-yellow-100 hover:text-2xl transition-all duration-300">
        Category
      </h1>
       
      <ul className="space-y">
        <li className="text-xl h-14 flex justify-center items-center text-lg hover:bg-yellow-200  hover:text-2xl">
          Veg
        </li>
        <li className="text-xl h-14 flex justify-center items-center text-lg hover:bg-yellow-200  hover:text-2xl">
          Non-Veg
        </li>
        <li className="text-xl h-14 flex justify-center items-center text-lg hover:bg-yellow-200  hover:text-2xl">
          curi
        </li>
        <li className="text-xl h-14 flex justify-center items-center text-lg hover:bg-yellow-200  hover:text-2xl">
          Ld
        </li>
        <li className="text-xl h-14 flex justify-center items-center text-lg hover:bg-yellow-200  hover:text-2xl">
          Chicken
        </li>
        <li className="text-xl h-14 flex justify-center items-center text-lg hover:bg-yellow-200  hover:text-2xl">
          Veg
        </li>
        <li className="text-xl h-14 flex justify-center items-center text-lg hover:bg-yellow-200  hover:text-2xl">
          Sweet
        </li>
        <li className="text-xl h-14 flex justify-center items-center text-lg hover:bg-yellow-200  hover:text-2xl">
          Veg
        </li>
        <li className="text-xl h-14 flex justify-center items-center text-lg hover:bg-yellow-200  hover:text-2xl">
          Maggi
        </li>
        <li className="text-xl h-14 flex justify-center items-center text-lg hover:bg-yellow-200  hover:text-2xl">
          Veg
        </li>
        <li className="text-xl h-14 flex justify-center items-center text-lg hover:bg-yellow-200  hover:text-2xl">
          Spicey
        </li>
      </ul>
    </div>
  );
};

export const Categorymain = () => {
  /* JSON Data*/
  let categoryData = {
    "Veg": [
      {
        "cardId": 1,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
        "title": "Food 1",
        "type": "Non Veg"
      },
      {
        "cardId": 2,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
        "title": "Food 2",
        "type": "Veg"
      }
    ],
    "Non-Veg": [
      {
        "cardId": 3,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552",
        "title": "Food 3",
        "type": "Veg"
      },
      {
        "cardId": 4,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/349e8d46-3138-4b19-96b2-df400a77e285_622197.JPG",
        "title": "Food 4",
        "type": "Non Veg"
      }
    ],
    "Curi": [
      {
        "cardId": 5,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/b5c7e325-a2b3-4334-b104-0b20df81dd93_23728.JPG",
        "title": "Food 5",
        "type": "Veg"
      },
      {
        "cardId": 6,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/b5c7e325-a2b3-4334-b104-0b20df81dd93_23728.JPG",
        "title": "Food 6",
        "type": "Veg"
      }
    ],
    "ld": [
      {
        "cardId": 7,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750391.JPG",
        "title": "Food 7",
        "type": "Non Veg"
      },
      {
        "cardId": 8,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e44fd7f1e5cd9967edfe47c10247671",
        "title": "Food 8",
        "type": "Veg"
      }
    ],
    "chiken": [
      {
        "cardId": 9,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/69a061b7e0f951cef2b4947946f94ec6",
        "title": "Food 9",
        "type": "Veg"
      },
      {
        "cardId": 10,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395",
        "title": "Food 10",
        "type": "Non Veg"
      }
    ],
    "Category 6": [
      {
        "cardId": 11,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/64fd45fd9f44c1737bc446e470bed666",
        "title": "Food 11",
        "type": "Veg"
      },
      {
        "cardId": 12,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552",
        "title": "Food 12",
        "type": "Veg"
      }
    ],
    "Veg": [
      {
        "cardId": 13,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "title": "Food 13",
        "type": "Non Veg"
      },
      {
        "cardId": 14,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/91afd7c438fcf1a3b55b97c2fbaa1cfa",
        "title": "Food 14",
        "type": "Veg"
      },
      {
        "cardId": 15,
        "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750391.JPG",
        "title": "Food 15",
        "type": "Veg"
      }
    ]
  }

  return (
    <div className="category border-2 mt-16 flex  ">
      <CategoryList />
      <div className="border-6 w-3/4">

     
      {
       Object.keys(categoryData).map((categoryName)=>{
        if(categoryData.hasOwnProperty(categoryName)){
          return(
            <div key={categoryName} className="border-2">
            <h1 className="flex m-8 text-2xl">{categoryName}</h1>
            <div className="category-cardsilist flex flex-wrap">
            {
              <div className="w-full category-cardsilist flex flex-wrap">
          {categoryData[categoryName].map((card) => {
            return <Cards key={card.cardId} {...card} />;
          })}
        </div>
            }

            </div>
            </div>
          )
        }
       })
      }
      </div>
      
    </div>
  );
};
