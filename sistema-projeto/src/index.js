import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './paginas/App';
import Login from './paginas/Login';
import Chamado from './paginas/Chamado';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Cadastro from './paginas/Cadastro';
import Abertura from './paginas/Abertura_chamados';
import Exclusao from './paginas/Exclusao';
import Dashboard from './paginas/Dashboard';



const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/app",
    element: <App />
  },
  {
    path: "/chamado",
    element: <Chamado />

  },
  {
    path: "/Cadastro/", 
    element: <Cadastro/>
  },
  {
    path: "/abertura/",
    element: <Abertura  />

  },
  {
    path:"/exclusao",
    element:<Exclusao/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
