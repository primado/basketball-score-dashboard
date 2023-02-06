import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import Dashboard from './components/Dashboard';
import Controller from './components/controller';
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/controller",
    element: <Controller />,
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
