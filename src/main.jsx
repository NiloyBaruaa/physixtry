import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Roots/Roots';
import Home from './Components/Home/Home';
import Classes from './Components/Classes/Classes';
import Subject from './Components/Subject/Subject';
import Physics from './Components/Physics/Physics';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/subject',
        element: <Subject></Subject>
      },
      {
        path: '/physics',
        element: <Physics></Physics>
      },
      {
        path: '/chemistry',
        element: <Subject></Subject>
      },
      {
        path: '/biology',
        element: <Subject></Subject>
      },
      {
        path: '/math',
        element: <Subject></Subject>
      },
      {
        path: '/highermath',
        element: <Subject></Subject>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(


    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
 
)
