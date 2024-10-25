import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthPage from './Pages/AuthPage/AuthPage.jsx';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './Pages/HomePage/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage/>
  },
  {
    path: "/home",
    element: <HomePage/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
