import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Cardscontent } from './MyComponents/Category/Cardscontent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Cardscontent",
    element: <Cardscontent />
  }
]);

function Main() {
  return (
    <RouterProvider router={router} />
  );
}

export default Main;
