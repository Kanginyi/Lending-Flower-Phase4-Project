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

        alert("Welcome!");
    }

    return (
        <div id="login-div">
            <form id="form-flex">
                <h2>Lending Breeze <img src="https://i.imgur.com/91ZrLfL.png" alt="Lending Tree/Breeze Logo" title="Welcome to Lending Breeze" width="22px"/></h2>               
                <div>
                <div className="login-text-bold">Username:</div>
                <input onChange={e => handleInputChange(e, "username")} type="text" name="username" required="required"/>
                </div><br/>
                <div>
                <div className="login-text-bold">Password:</div>
                <input onChange={e => handleInputChange(e, "password")} type="password" name="password" required="required"/>
                </div><br/>
                <button type="submit" onClick={handleLogin}>Login</button><br/>
            </form>
        </div>
    );
}

export default Login;