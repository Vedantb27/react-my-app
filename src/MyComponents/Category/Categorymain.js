import React from "react";
import { Cards } from "./Cards";
import { Categorylist } from "./Categorylist";
import { useState, useEffect } from "react";

export const Categorymain = () => {
  /* JSON Data*/
 const [categoryData , setcategoryData] = useState({});


 useEffect(()=>{
  const fetchData = async () =>{
    try{
      const response = await fetch("https://mocki.io/v1/9258796a-9e9f-4903-9855-1d5c3e78d37d");
      const data = await response.json();
      setcategoryData(data);
    }catch (error){
      console.log("error fetching the data",error)
    }
  }
  fetchData()
 },[])

  
  return ( 
    <div className="category border-2 mt-16 flex  ">
     {/* <Categorylist categoryData={categoryData} />    */}
      <div className="border-6 w-full">

     
      {
       Object.keys(categoryData).map((categoryName)=>{
        if(categoryData.hasOwnProperty(categoryName)){
          return(
            <div key={categoryName} className="lg:ml-28 lg:mr-28 ">
            <h1 className="text-3xl font-bold  bg-clip-text sm:p-4 rounded-lg shadow-md m-8 text-left">
                  {categoryName}
                </h1>



            <div className="category-cardsilist  flex flex-wrap">
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
