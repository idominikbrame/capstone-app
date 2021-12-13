import React, {useState} from 'react';
import FetchUsers from "../FetchUsers";
import {Link} from "@mui/material";

const Login = (props) => {
    const [authed, setAuthed] = useState(false)
    return (
        <div>
            <h1>Login Page</h1>
            <button ><Link to="/Dashboard">Login</Link></button>
        </div>
    );
};

export default Login;