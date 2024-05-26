import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player'

export const Cardscontent = () => {
  let location = useLocation();
  
  return (
    <div>
   <div className='bg-gray-100 p-8'>
      <h1 className='text-center text-4xl font-bold text-red-600 mb-8'>{location.state.title}</h1>

      <div className='bg-white shadow-lg rounded-lg p-6'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 h-64 md:h-96 mb-6 md:mb-0 md:mr-8 border-2 rounded-lg overflow-hidden'>
            <ReactPlayer
              width='100%'
              height='100%'
              controls
              url='https://www.youtube.com/watch?v=iWT0kl1k32M&ab_channel=JoshuaWeissman'
            /> 
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='flex text-center text-2xl font-semibold text-gray-800 mb-4 ml-4'>Details About This Meal</h2>
            <p className='border-2 p-4 rounded-lg max-h-56 overflow-y-auto text-gray-700'>
              Scrambled eggs, sausages tossed in a special seasoning are served alongside a hash brown. This blend isn't
              just perfect for starting your day, but also great to get you through your busy schedule. Order now.
              Scrambled eggs, sausages tossed in a special seasoning are served alongside a hash brown. This blend isn't
              just perfect for starting your day, but also great to get you through your busy schedule. Order now.
              Scrambled eggs, sausages tossed in a special seasoning are served alongside a hash brown. This blend isn't
              just perfect for starting your day, but also great to get you through your busy schedule. Order now.
              Scrambled eggs, sausages tossed in a special seasoning are served alongside a hash brown. This blend isn't
              just perfect for starting your day, but also great to get you through your busy schedule. Order now.
              Scrambled eggs, sausages tossed in a special seasoning are served alongside a hash brown. This blend isn't
              just perfect for starting your day, but also great to get you through your busy schedule. Order now.
              Scrambled eggs, sausages tossed in a special seasoning are served alongside a hash brown. This blend isn't
              just perfect for starting your day, but also great to get you through your busy schedule. Order now.
              {/* Repeated content truncated for brevity */}
            </p>
            <div className='text-center mt-4 text-xl text-red-600 font-semibold flex ml-4'>
              Type: {location.state.type}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <div className='bg-white shadow-lg rounded-lg p-6 md:w-full ml-auto'>
          <h2 className=' flex ml-4 text-2xl font-semibold text-gray-800 mb-4'>Ingredients</h2>
          <p className='flex border-2 p-4 rounded-lg max-h-56 overflow-y-auto text-gray-700'>
            Yellow Cheddar, Chicken Sausage, Panko Crumbs, Parsley, Black Pepper, Bell Peppers, Potato, Butter, Eggs
            Yellow Cheddar, Chicken Sausage, Panko Crumbs, Parsley, Black Pepper, Bell Peppers, Potato, Butter, Eggs
            Yellow Cheddar, Chicken Sausage, Panko Crumbs, Parsley, Black Pepper, Bell Peppers, Potato, Butter, Eggs
            Yellow Cheddar, Chicken Sausage, Panko Crumbs, Parsley, Black Pepper, Bell Peppers, Potato, Butter, Eggs
          </p>
        </div>
      </div>
    </div>

      <button class="btn btn-primary hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md">
        <Link to="/">Back to menu</Link>
      </button>
    </div>
  );
};
