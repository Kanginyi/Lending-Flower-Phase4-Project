import React from 'react';

function Contact() {
    return (
        <div id="contact-page-div">
            <div className="contact-div" id="kevin-lutz">
                <ul>
                    <a href="https://github.com/kevinlutz" target="_blank"  className="contact-links">Github</a><br/>
                    <a href="https://www.kevinlutz.com/" target="_blank"  className="contact-links">Blog</a><br/>
                    <a href="https://www.youtube.com/channel/UCf2APcfTeFYTu1Gd777viFw" target="_blank"  className="contact-links">YouTube</a><br/>
                </ul>
                <h2>Kevin Lutz</h2>
            </div>
            <div className="contact-div" id="eric-yi">
                <h2>Eric Yi</h2>
                <ul>
                    <a href="https://github.com/Kanginyi" target="_blank"  className="contact-links">Github</a>
                </ul>
            </div>
        </div>
    );
}

export default Contact;