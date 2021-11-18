import React, {useState} from 'react';
import {useNavigate} from "react-router"

function Login() {
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (e, field) => {
        if (field === "username") {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();

        fetch("/sessions", {
            method: "POST",
            headers: {"Content-Type": "application/json", accepts: "application/json"},
            body: JSON.stringify({username: username, password: password})
        })
            .then(resp => resp.json())
            .then(navigate("../", {replace: true}))
    }

    return (
        <div>
            <h1>Lending Breeze</h1>

            <form id="form-flex">
                <span className="login-text-bold">Username:</span>
                <input onChange={e => handleInputChange(e, "username")} type="text" name="username" /><br/>
                <span className="login-text-bold">Password:</span>
                <input onChange={e => handleInputChange(e, "password")} type="password" name="password" />
                <br/>
                <button onClick={handleLogin}>Login</button><br/>
                <button>Signup</button>
            </form>
        </div>
    );
}

export default Login;