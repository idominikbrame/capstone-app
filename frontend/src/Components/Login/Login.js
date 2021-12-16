import React, {useEffect, useState} from 'react';
import {Authentication} from "./Authenticate";

const Login = (props) => {

    //Fetch Users from Express Back End
    //data = results from fetch response

    const [users, setUsers] = useState(null);

    const fetchUser = async () => {
        try {
            fetch("http://localhost:4000/aws")
                .then(response => response.json())
                .then(users => {
                    setUsers(users)
                    console.log(users)
                })
        } catch (error) {
            console.log(error)
        }
    };

    //Call Fetch on Users from Server
    useEffect(() => {
        // eslint-disable-next-line
        fetchUser()
    }, []);

    const checkForUser = (users) => {
        Authentication(users)
    }



    //Return Login UI
    if(users == null){
        return <div></div>
    } else {
        return (
            <div>
                <h1>Login Page</h1>
                <form>
                    <label>Email</label>
                    <input placeholder={"example@email.com"}/>
                    <label>Password</label>
                    <input placeholder={"password"}/>
                    <input type={"button"} onClick={checkForUser} value={"Login"}/>
                </form>
            </div>
        );
    }
};

export default Login;