import React from 'react'
import ReactDOM from 'react-dom/client'



import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes';
import Home from './Home/Home';

import Property from './Home/Portfolio/Property';
import Register from './Register/Register';
import Login from './Home/Login/Login';
import ContextProvider from './Provider/ContextProvider';
import UpdateProfile from './UpdateProfile/UpdateProfile';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ContactUs from './Contact us/ContactUs';
import ErrorPage from './ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/property/:id",
        loader: () => fetch('/Data.json'),
        element: <PrivateRoute><Property></Property></PrivateRoute>

      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/update',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },


    ]


  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>

  </React.StrictMode>,
)
