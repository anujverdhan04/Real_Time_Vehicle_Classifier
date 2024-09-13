import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Webapp from './components/Webapp.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/webapp",
    element: <Webapp/>
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    
  </React.StrictMode>,
)
