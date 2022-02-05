import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Login.css'
import {Navigate} from "react-router-dom";

const Login = () => {

    //Fetch Users from Express Back End
    const [loggedIn, setLoggedIn] = useState(false)
    const fetchUser = () => {
        axios({
            method: 'post',
            url: 'http://localhost:4000/aws',
            data: ({
                email: email,
                password: password
            })
        })
            .then(response => {
                if(Object.values(response.data)[0] === "access granted") {
                    console.log(Object.values(response.data)[0] === "access granted")
                    authSuccessful()
                }

            })
    };

    const authSuccessful = () => {
        setLoggedIn(true)
        document.cookie = `loggedIn=true;max-age=60*1000`
    }

    useEffect(() => {

    }, [])

    //CheckLoginCredentials
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    //Return Login UI
    if (!loggedIn) {
        return (
            <div className={'form-container'}>
                <h1>Login Page</h1>
                <form>
                    <label>Email: </label>
                    <input placeholder={"example@email.com"} onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password: </label>
                    <input placeholder={"password"} onChange={(e) => setPassword(e.target.value)}/>
                    <input type={"button"} onClick={fetchUser} value={"Login"}/>
                </form>
            </div>
        );
    } else {
        return <Navigate to={'/top-headlines'} />
    }

};

export default Login;