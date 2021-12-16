import React, {useEffect, useState} from 'react';
import {Authentication} from "./Authenticate";

const Login = (props) => {

    //Fetch Users from Express Back End
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


    //CheckLoginCredentials
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        let input = e.target.value.trim()
        setEmail(input)
    }

    const handlePasswordChange = (e) => {
        let input = e.target.value.trim()
        setPassword(input)
    }

    const checkForUser = (users) => {
        let thePass = password.trim()
        let theEmail = email.trim()

        console.log(typeof thePass,typeof theEmail)
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
                    <input placeholder={"example@email.com"} onBlur={handleEmailChange}/>
                    <label>Password</label>
                    <input placeholder={"password"} onBlur={handlePasswordChange}/>
                    <input type={"button"} onClick={checkForUser} value={"Login"}/>
                </form>
            </div>
        );
    }
};

export default Login;