import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Pizza from "../pages/Pizza/Pizza";
import Burger from "../pages/Burger/Burger";
import Rice from "../pages/Rice/Rice";
import Desserts from "../pages/Desserts/Desserts";
import FoodItem from "../pages/Home/FoodItem";
import SauceSalad from "../pages/Home/SauceSalad";
import Contact from "../pages/Home/Contact";

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
            path: '/about',
            element: <SauceSalad></SauceSalad>
        },
        {
            path: '/services',
            element: <FoodItem></FoodItem>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
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
        },
        {
            path: '/desserts',
            element: <Desserts></Desserts>
        }
      ]
    },
  ]);

  export default router;