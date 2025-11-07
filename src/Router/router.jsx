import { createBrowserRouter } from "react-router";
import RootLayout from "../Lyouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AuthLayout from "../Lyouts/AuthLayout";
import Login from "../Pages/Authentication/Login";
import AboutUsLayout from "../Lyouts/AboutUsLayout";
import PricingLayout from "../Lyouts/PricingLayout";
import Pricing from "../Pages/Pricing/Pricing";
import TrackOrderLayout from "../Lyouts/TrackOrderLayout";
import TrackYourOrder from "../Pages/TrackYourOrder/TrackYourOrder";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: Home },


        ],
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            { path: "login", Component: Login },


        ],
    }, {
        path: "/",
        Component: AboutUsLayout,
        children: [
            { path: "about", Component: AboutUs },


        ],
    }, {
        path: "/",
        Component: PricingLayout,
        children: [
            { path: "pricing", Component: Pricing },


        ],
    }, {
        path: "/",
        Component: TrackOrderLayout,
        children: [
            { path: "trackOrder", Component: TrackYourOrder },


        ],
    }


]);
