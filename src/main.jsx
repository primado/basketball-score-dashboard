import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import Controller from './components/controller';
import Config from './components/Configurations';
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/controller",
    element: <Controller />,
  },

  {
    path: "/config",
    element: <Config />,
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
