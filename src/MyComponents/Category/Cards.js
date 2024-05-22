import React from "react";

export const Cards = ({imageId,title,type}) => {

  return (
    <div class="max-w-sm w-1/4  bg-white border border-gray-200 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl m-4">
    <a class="flex justify-center" href="#">
      <img
        class="rounded-xl  h-40 mt-4 object-cover"
        src={imageId}
        alt={title}
      />
    </a>
    <div class="p-4">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition duration-300">
          {title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700">
        {type}
      </p>
    </div>
  </div>
  
  );
};
