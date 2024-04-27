import React from 'react'
import { createBrowserRouter,  RouterProvider, } from "react-router-dom";
import Home from './Pages/Home';
import CommoditiesDetalhes from './Pages/CommoditiesDetalhes';
import Links from './Pages/Links';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },  
  {
    path: "/comodities",
    element: <CommoditiesDetalhes />,
  },
  {
    path: "/bibliografia",
    element: <Links />,
  },
]);

function App() {
  return (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  )
}

export default App