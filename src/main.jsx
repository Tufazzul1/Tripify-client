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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
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
