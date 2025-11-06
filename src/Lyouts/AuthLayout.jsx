import React from "react";
import { Outlet } from "react-router";
import Login from "../Pages/Authentication/Login";

const AuthLayout = () => {
    return (
        <div>
            <Login></Login>

        </div>
    );
};

export default AuthLayout;
