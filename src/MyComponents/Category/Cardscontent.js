import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player'

export const Cardscontent = () => {
  let location = useLocation();
  
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white flex justify-between items-center px-4 py-2">
          <h1 className="text-xl font-bold">My Food App</h1>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
            <Link to="/">Back to menu</Link>
          </button>
        </header>
        <main className="flex-grow overflow-y-auto px-4 py-4 ">
          <div className="flex flex-col md:items-center md:space-x-4">
            <div className="w-full md:w-1/2 h-56 md:mb-2 md:h-96 mb-6 md:mb-0 md:mr-8 border-2 rounded-lg overflow-hidden">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=iWT0kl1k32M&ab_channel=JoshuaWeissman"
              />
            </div>
            <div className="w-full md:w-3/4 mt-4 md:mt-0 border-2 rounded-2xl border-cyan-400 p-2">
              <div className="bg-gray-100 p-4  shadow-m">
                <h2 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 hover:text-white text-2xl">
                  High Protein English Breakfast
                </h2>
                <div className="text-gray-700 m-2  text-start min-h-60  max-h-96 flex md:flex-row flex-col-reverse md:items-center  ">
                  <p className="md:w-1/2 border-2 border-blue-400 rounded-2xl hide-scrollbar mt-4 p-4 mr-2 overflow-y-auto min-h-40 max-h-80">
                    {location.state.mealDetail}
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sin
                  </p>
                  <img
                    className="rounded-xl  h-40 w-60  md:h-72 md:w-2/5 ml-auto mr-auto mt-4 object-cover  "
                    src={location.state.imageId}
                    alt={location.state.title}
                  />
                </div>

                <div className="flex  items-center  mt-4">
                  <div className="flex items-center space-x-2">
                    <p className=" text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500">Type :</p>
                    <p className="text-lg">
                      {location.state.type}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500 ">
                    Ingredients
                  </h3>

                  <p className="text-gray-700">
                  {location.state?.ingredients.map((ingredient)=>{
                    return ingredient.concat(",  ")
                  })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
