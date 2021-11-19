import React from 'react';

function Contact() {
    return (
        <>
        <section>
            <div className="container">
                <h2>Contact Us</h2>
                <div className="row100">
                    <div className="col">
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                                <span className="text">First Name</span>
                                <span className="line"></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                                <span className="text">Last Name</span>
                                    <span className="line"></span>
                        </div>
                    </div>
                </div>
                <div className="row100">
                    <div className="col">
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                                <span className="text">Email</span>
                                <span className="line"></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                                <span className="text">Mobile</span>
                                <span className="line"></span>
                        </div>
                    </div>
                </div>

                <div className="row100">
                    <div className="col">
                        <div className="inputBox textarea">
                            <textarea style={{resize: "none"}} required="required"></textarea>
                            <span className="text">Type Your Message Here</span>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>

                <div className="row100">
                    <div className="col">
                        <input type="submit" value="send"></input>
                    </div>
                </div>
            </div>
            
        </section>


            <div>
                <h2>Kevin Lutz</h2>
                <ul>
                    <a href="https://github.com/kevinlutz" target="_blank"  className="contact-links">Github</a><br/>
                    <a href="https://www.kevinlutz.com/" target="_blank"  className="contact-links">Blog</a><br/>
                    <a href="https://www.youtube.com/channel/UCf2APcfTeFYTu1Gd777viFw" target="_blank"  className="contact-links">YouTube</a><br/>
                </ul>
            </div>
            <div>
                <h2>Eric Yi</h2>
                <ul>
                    <a href="https://github.com/Kanginyi" target="_blank"  className="contact-links">Github</a>
                </ul>
            </div>
        </>
    );
}

export default Contact;