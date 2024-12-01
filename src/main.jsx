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
import PrivateRoute from './Components/PrivateRoute/PrivatRoute';
import { AuthProvider } from './Components/AuthProvider/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Books from './Components/Books/Books';
import Exams from './Components/Exams/Exams';
import Details from './Components/Details/Details';
import Notifications from './Components/Notifications/Notifications';
import Instructions from './Components/Instructions/Instructions';




const router = createBrowserRouter([
  {
    path: "/physixtry/",
    element: <Roots></Roots>,
    errorElement : <Roots></Roots>,
    children: [
      {
        path: '/physixtry/',
        element: <Home></Home>
      },
      {
        path: "/physixtry/classes",
        element: (
          <PrivateRoute>
            <Classes></Classes>
          </PrivateRoute>
        ),
      },
      {
        path: '/physixtry/login',
        element: <Login></Login>
      },
      {
        path: '/physixtry/register',
        element: <Register></Register>
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
        path: '/physixtry/instructions',
        element: <Instructions></Instructions>
      },
      {
        path: '/physixtry/highermath',
        element: <HigherMath></HigherMath>
      },
      {
        path: '/physixtry/book',
        element: <Books></Books>
      },
      {
        path: '/physixtry/notifications',
        element: <Notifications></Notifications>
      },
      {
        path: '/physixtry/exams',
        element: <Exams></Exams>
      },
      {
        path: '/physixtry/details',
        element: <Details></Details>
      },
    ]
  },
],
  {
    future: {
      v7_skipActionErrorRevalidation: true,  // Opt-in early for v7 behavior
    },
  });


createRoot(document.getElementById('root')).render(


  <AuthProvider>
    <RouterProvider router={router} basename="/physixtry/" />
  </AuthProvider>



)
