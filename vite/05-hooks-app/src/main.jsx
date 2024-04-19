import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import './08-useReducer/intro-reducer';
import { RouterProvider } from 'react-router-dom';
import { getRoutes } from './09-useContext/Routes';

const router = getRoutes()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
