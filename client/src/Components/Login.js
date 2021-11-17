import React from 'react';
import GoldBackground from "../GoldBackground.mp4"

function Login() {
    return (
        <div id="login-background">
            <video
                id="background-video"
                src={GoldBackground}
                loop
                muted
                autoPlay={true}
            />
            <h1 id="logo">Lending Breeze</h1>

      
            <form id="form-flex">
                <span className="login-text-bold">Username:</span>
                <input type="text" name="username" /><br/>
                <span className="login-text-bold">Password:</span>
                <input type="password" name="password" />
                <br/>
                <button>Login</button><br/>
                <button>Signup</button>
            </form>
        </div>
    );
}

export default Login;