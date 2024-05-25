import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Cardscontent = () => {
  let location = useLocation();
  
  return (
    <div>
    <div  class="  max-w-sm min-h-40 min-w-40 w-1/5  transform transition duration-500 hover:scale-105 hover:shadow-xl m-4" id={location.state.title}>
    <div class="flex justify-center " >
      <img
        className="rounded-xl  h-40 w-60 mt-4 object-cover"
        src={location.state.imageId}
        alt={location.state.title}
      />
    </div>
    <div class="p-4">
       <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition duration-300">
          {location.state.title}
        </h5>
      </div> 
      <p class="mb-3 font-normal text-gray-700">
        {location.state.type}
      </p>
    </div>
  </div>

      <button class="btn btn-primary hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md">
        <Link to="/">Back to menu</Link>
      </button>
    </div>
  );
};
