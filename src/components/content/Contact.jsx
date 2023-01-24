import React from "react";
import axios from 'axios';

function Contact() {


  

    return(<div className="contact-div">

        <div className="contact-left">
            <h1>Contact me</h1>
            <p>Lets work together! I am always looking for new oppurtunitys to learn more technology and further my skills.  </p>
            
        </div>
        <div className="contact-right">
                <form className="contact-form">
                    name
                    <input name="name" className="name-input" placeholder="enter your name"></input>
                    email
                    <input name="email" className="email-input" placeholder="enter your email"></input>
                    message
                    <textarea name="message" className="message-input" placeholder="enter your message" ></textarea>
                    
                    
                    <button  className="submit-contact-btn" type="submit">Submit</button>
                    
                </form>
        </div>


    </div>)
}

export default Contact;