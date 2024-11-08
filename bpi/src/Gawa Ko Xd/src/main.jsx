import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter , RouterProvider , Link , createBrowserRouter} from 'react-router-dom'
import Profile from './assets/router/Profile.jsx'
import About from './assets/router/About.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/profiles',
    element:<Profile/>
  },
  {
    path:'/about',
    element:<About/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
