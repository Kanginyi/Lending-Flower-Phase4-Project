import React from 'react';
import GoldBackground from "../GoldBackground.mp4"

function Navbar() {
    function handleClick() {
        fetch("/cookie_click")
            .then(resp => resp.json())
            .then(console.log)
    }

    return (
        <>
            <ul>
                <button onClick={handleClick}>Click</button>
                <li>Logo</li>
                <li>New Loan</li>
                <li>Contact Us</li>
                <li>Login</li>
            </ul>
        </>
    );
}

export default Navbar;

/*
new loan
login
logo image
about us/contact us
*/