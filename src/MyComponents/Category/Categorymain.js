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
      const response = await fetch("https://mocki.io/v1/54bd242a-076b-474b-915a-0362ba8f10c5");
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
     <Categorylist categoryData={categoryData} />
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
