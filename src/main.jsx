import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import Controller from './components/controller';
import Controller_2 from './components/Controller_2';
import Config from './components/Configurations';
import Leaderboard from './components/Leaderboard';
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

  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },

  {
    path: "/controller-2",
    element: <Controller_2 />
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
