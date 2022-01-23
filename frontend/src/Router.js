import React from 'react';
import {Route, Routes} from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import cookie from 'cookie'
import Dashboard from "./Components/Dashboard/Dashboard";
import {Navigate} from "react-router";


function RequireAuth({ children, redirectTo }) {
    let isAuthenticated = checkAuth();
    return isAuthenticated ? children: <Navigate to={redirectTo}/>;
}


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const Router = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Landing />}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/dashboard"
                       element={
                            <RequireAuth redirectTo="/login">
                                <Dashboard />
                            </RequireAuth>
                       } />
            </Routes>
        </div>
    );
};

export default Router;