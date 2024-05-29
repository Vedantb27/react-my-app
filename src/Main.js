import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Cardscontent } from './MyComponents/Category/Cardscontent';
import { Admineditcategory } from './MyComponents/Admin/Admineditcategory';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:  "/Cardscontent",
    element: <Cardscontent />
  },
  {
    path:  "/Admineditcategory",
    element: <Admineditcategory />
  }

]);

function Main() {
  return (
    <RouterProvider router={router} />
  );
}

export default Main;
