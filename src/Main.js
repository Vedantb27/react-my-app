import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Cardscontent } from './MyComponents/Category/Cardscontent';
import { Admineditcategory } from './MyComponents/Admin/Admineditcategory';
import { Admincardsedit } from './MyComponents/Admin/Admincardsedit';
import { AdminProvider } from './MyComponents/Admin/Admincontext';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Cardscontent", element: <Cardscontent /> },
  { path: "/Admineditcategory", element: <Admineditcategory /> },
  { path: "/Admincardsedit", element: <Admincardsedit /> }
]);

function Main() {
  return (
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  );
}

export default Main;
