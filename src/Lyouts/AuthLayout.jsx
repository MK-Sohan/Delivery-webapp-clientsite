import React from "react";
import { Outlet } from "react-router";
import Login from "../Pages/Authentication/Login";
import Footer from "../Pages/Shared/Footer/Footer";

const AuthLayout = () => {
    return (
        <div>
            <Login></Login>
            <Footer></Footer>

        </div>
    );
};

export default AuthLayout;
