import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Pizza from "../pages/Pizza/Pizza";
import Burger from "../pages/Burger/Burger";
import Rice from "../pages/Rice/Rice";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/pizza',
            element: <Pizza></Pizza>
        },
        {
            path: '/burger',
            element: <Burger></Burger>
        },
        {
            path: '/rice',
            element: <Rice></Rice>
        }
      ]
    },
  ]);

  export default router;