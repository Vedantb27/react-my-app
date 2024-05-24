
import './App.css';
import { Navbar } from './MyComponents/Navbar';
import { Carousel } from './MyComponents/Corousel/Carousel';
import { Categorymain } from './MyComponents/Category/Categorymain';
import { Corouselnew } from './MyComponents/Corousel/Corouselnew';
import { useState, useEffect } from "react";

function App() {
  const [categoryData , setcategoryData] = useState({});


useEffect(()=>{
 const fetchData = async () =>{
   try{
     const response = await fetch("https://mocki.io/v1/496c738c-f995-4bc4-aace-abf2370fadd1");
     const data = await response.json();
     setcategoryData(data);
   }catch (error){
     console.log("error fetching the data",error)
   }
 }
 fetchData()
},[])

  return (
    <div className="App">
     <Navbar/>
     <Corouselnew  categoryData ={categoryData}/>
     <Categorymain categoryData ={categoryData}/>
    </div>
  );
}

export default App;
