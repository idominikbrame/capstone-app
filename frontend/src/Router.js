import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./Components/Login/Login";
import cookie from 'cookie'
import TopHeadlines from "./Components/TopHeadlines/TopHeadlines";
import {Navigate} from "react-router";
import TechNews from "./Components/TechNews/TechNews";
import International from "./Components/International/International";
import Sports from "./Components/Sports/Sports";
import Covid19 from "./Components/Covid-19/Covid19";
import Register from "./Components/Register/Register";


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
                <Route exact path="/" element={<TopHeadlines />}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/top-headlines"
                       element={
                            <RequireAuth redirectTo="/login">
                                <TopHeadlines />
                            </RequireAuth>
                       } />
                <Route exact path="/tech-news"
                       element={
                           <RequireAuth redirectTo="/login">
                               <TechNews />
                           </RequireAuth>
                       } />
                <Route exact path="/international-news"
                       element={
                           <RequireAuth redirectTo="/login">
                               <International />
                           </RequireAuth>
                       } />
                <Route exact path="/sports"
                       element={
                           <RequireAuth redirectTo="/login">
                               <Sports />
                           </RequireAuth>
                       } />
                <Route exact path="/covid19"
                       element={
                           <RequireAuth redirectTo="/login">
                               <Covid19 />
                           </RequireAuth>
                       } />
            </Routes>
        </div>
    );
};

export default Router;