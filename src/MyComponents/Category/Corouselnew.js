import React from 'react';

export const Corouselnew = ({ categoryData }) => {
  return (
    <div className='h-72 mt-8 '>
      <div className='h-12 sm:ml-20 sm:mr-20 flex justify-between items-center'>
        <p className='text-2xl'>Category</p>
        <div className='w-20 flex justify-between'>
          <i className="fa-solid fa-arrow-left text-2xl"></i>
          <i className="fa-solid fa-arrow-right text-2xl"></i>
        </div>
      </div>
      <div className=' h-56 border-2 rounded-xl mt-2 sm:ml-20 sm:mr-20 flex justify-between items-center overflow-x-auto overflow-y-hidden'>
        {Object.keys(categoryData).map((categoryName) => (
          <div key={categoryName} className=' rounded-xl w-72 h-34 ml-14 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-2'>
            <img
              src={categoryData[categoryName].imageId}
              alt={categoryName}
              className='rounded-xl w-20 h-20 object-cover mt-2 max-w-full'
            />
            <p className='text-sm font-medium mt-2'>{categoryName}</p>
          </div>
        ))}
        
        
      
      </div>
    </div>
  );
};
