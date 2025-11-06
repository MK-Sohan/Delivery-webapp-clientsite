import { createBrowserRouter } from "react-router";
import RootLayout from "../Lyouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";


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

    }

]);
