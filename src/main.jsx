import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Workshop from './Components/DynamicRoutes/Workshop';
import Webinars from './Components/DynamicRoutes/Webinars';
import CareerFairs from './Components/DynamicRoutes/CareerFairs';
import EducationalConferances from './Components/DynamicRoutes/EducationalConferances';
import Seminar from './Components/DynamicRoutes/Seminar';
import Training from './Components/DynamicRoutes/Training';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import EventSponsors from './Components/EventSponsors/EventSponsors';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/home",
        element : <Home></Home>
      },
      {
        path : "/signup",
        element : <Signup></Signup>
      },
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/details/:id",
        element : <Details></Details>,
        loader : () => fetch('/data.json')
      },
      {
        path : "/eventDetails/:id",
        element : <PrivateRoute><Workshop></Workshop></PrivateRoute>
      },
      {
        path : "/webinarsDetails/:id",
        element : <PrivateRoute><Webinars></Webinars></PrivateRoute>
      },
      {
        path : "/careerDetails/:id",
        element : <PrivateRoute><CareerFairs></CareerFairs></PrivateRoute>
      },
      {
        path : "/educationDetails/:id",
        element : <PrivateRoute><EducationalConferances></EducationalConferances></PrivateRoute>
      },
      {
        path : "/seminarDetails/:id",
        element : <PrivateRoute><Seminar></Seminar></PrivateRoute>
      },
      {
        path : "/trainingDetails/:id",
        element : <PrivateRoute><Training></Training></PrivateRoute>
      },
      {
        path : "/sponsors",
        element : <PrivateRoute><EventSponsors></EventSponsors></PrivateRoute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
