import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Cardscontent } from './MyComponents/Category/Cardscontent';
import { Admineditcategory } from './MyComponents/Admin/Admineditcategory';
import { Admincardsedit } from './MyComponents/Admin/Admincardsedit';


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
  },
  {
    path:  "/Admincardsedit",
    element: <Admincardsedit />
  }


]);

function Main() {
  return (
    <RouterProvider router={router} />
  );
}

export default Main;
