import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Pizza from "../pages/Pizza/Pizza";

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
        }
      ]
    },
  ]);

  export default router;