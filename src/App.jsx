import { createBrowserRouter,  RouterProvider, } from "react-router-dom";import React from 'react'
import Home from './Pages/Home';
import Links from './Pages/Links';
import CommoditiesDetalhes from './Pages/CommoditiesDetalhes';
import InvestidoresDetalhes from './Pages/InvestidoresDetalhes';
import BrasileirosDetalhes from './Pages/BrasileirosDetalhes';
import MoedasDetalhes from "./Pages/MoedasDetalhes";
import TermosDetalhes from "./Pages/TermosDetalhes";
import InternationalDetalhes from "./Pages/InternationalDetalhes";
import FuncionamentoDetalhes from "./Pages/FuncionamentoDetalhes";
import ProfissaoDetalhes from "./Pages/ProfissaoDetalhes";
import RiscosDetalhes from "./Pages/RiscosDetalhes";

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
    path: "/investidores",
    element: <InvestidoresDetalhes />,
  },  
  {
    path: "/brasileiros",
    element: <BrasileirosDetalhes />,
  },
  {
    path : "/moedas",
    element: <MoedasDetalhes />
  },
  {
    path: "/termos",
    element: <TermosDetalhes />,
  },
  {
    path: "/international",
    element: <InternationalDetalhes />
  },
  {
    path: "/funcionamento",
    element: <FuncionamentoDetalhes />,
  },  
  {
    path: "/profissao",
    element: <ProfissaoDetalhes />,
  },
  {
    path: "/riscos",
    element: <RiscosDetalhes />,
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