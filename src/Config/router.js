import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Dashboard from "../Views/Dashboard"
import Detail from "../Views/Detail"
import Register from "../Views/Register"
import OLXLogin from "../Views/OLXLogin"
import Login from "../Views/Login"
import PostAd from "../Views/PostAd"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/detail/:adId",
      element: <Detail />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/login-page",
      element: <OLXLogin />,
    },
    {
      path: "/postAd",
      element: <PostAd />,
    }
  ]);

function Router () {
    return <RouterProvider router={router} />
}

export default Router;