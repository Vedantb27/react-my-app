import './App.css';
import { Navbar } from './MyComponents/Nabar/Navbar';
import { Categorymain } from './MyComponents/Category/Categorymain';
import { Corouselnew } from './MyComponents/Corousel/Corouselnew';
import { useState, useEffect } from "react";
import { Loginform } from './MyComponents/Nabar/Loginform';


function App() {
  const [categoryData, setCategoryData] = useState({});
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mocki.io/v1/7a9e4b69-0069-4e9b-8bc6-37b20dbd0e88");
        const data = await response.json();
        setCategoryData(data);
      } catch (error) {
        console.log("error fetching the data", error);
      } 
    }
    fetchData();
  }, []);

  return (
    <div className="App">
     <Navbar setShowLoginForm={setShowLoginForm} />
      {showLoginForm && <Loginform onClose={() => setShowLoginForm(false)} />}
      <Corouselnew categoryData={categoryData} />
      <Categorymain categoryData={categoryData} />   
    </div>
  );
}

export default App;
