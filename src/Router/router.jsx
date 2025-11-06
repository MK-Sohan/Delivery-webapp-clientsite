import { createBrowserRouter } from "react-router";
import RootLayout from "../Lyouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AuthLayout from "../Lyouts/AuthLayout";
import Login from "../Pages/Authentication/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: Home },


        ],
    },
    {
        path: "/about",
        Component: AboutUs,

    }, {
        path: "/",
        Component: AuthLayout,
        children: [
            { path: "login", Component: Login },


        ],
    }

]);
