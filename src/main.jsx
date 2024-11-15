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
import Chemistry from './Components/Chemistry/Chemistry';
import Biology from './Components/Biology/Biology'
import Maths from './Components/Maths/Maths'
import HigherMath from './Components/Higher Math/HigherMath'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: '/physixtry',
        element: <Home></Home>
      },
      {
        path: '/physixtry/classes',
        element: <Classes></Classes>
      },
      {
        path: '/physixtry/subject',
        element: <Subject></Subject>
      },
      {
        path: '/physixtry/physics',
        element: <Physics></Physics>
      },
      {
        path: '/physixtry/chemistry',
        element: <Chemistry></Chemistry>
      },
      {
        path: '/physixtry/biology',
        element: <Biology></Biology>
      },
      {
        path: '/physixtry/math',
        element: <Maths></Maths>
      },
      {
        path: '/physixtry/highermath',
        element: <HigherMath></HigherMath>
      }
    ]
  },
],
{
  future: {
    v7_skipActionErrorRevalidation: true,  // Opt-in early for v7 behavior
  },
});


createRoot(document.getElementById('root')).render(


  <StrictMode>

      <RouterProvider router={router}   basename="/physixtry" />

  </StrictMode>,

)
