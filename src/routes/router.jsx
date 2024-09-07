import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Shop from "../Pages/Shop";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Shop />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },

        ],
    },


    {
        path: "/user",
        element: <AuthLayout />,
        children: [
            {
                path: "/user/register",
                element: <Register />,
            },
            {
                path: "/user/login",
                element: <Login />,
            },

        ],
    },

]);

export default router;