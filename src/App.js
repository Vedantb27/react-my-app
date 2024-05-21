
import './App.css';
import { Navbar } from './MyComponents/Navbar';
import { Carousel } from './MyComponents/Carousel';
import { Categorymain } from './MyComponents/Category/Categorymain';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <Categorymain/>
    </div>
  );
}

export default App;
