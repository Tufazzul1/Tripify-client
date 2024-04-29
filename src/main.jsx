import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';
import Root from './Root/Root.jsx';
import AllSpot from './Pages/AllSpot.jsx';
import AddSpot from './Pages/AddSpot.jsx';
import MyList from './Pages/MyList.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Update from './Pages/Update.jsx';
import SpotDetails from './Pages/SpotDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/spots')
      },
      {
        path: "/allSpot",
        element: <AllSpot></AllSpot>
      },
      {
        path: "/addSpot",
        element: <PrivateRoutes><AddSpot></AddSpot></PrivateRoutes>
      },
      {
        path: "/myList",
        element: <PrivateRoutes><MyList></MyList></PrivateRoutes>
      },
      {
        path: "/spotDetails/:id",
        element: <PrivateRoutes><SpotDetails></SpotDetails></PrivateRoutes>
      },
      { 
        path: "/update/:id",
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
        // loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
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
