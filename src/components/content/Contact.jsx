import React, { useState } from "react";
import axios from "axios";



import linkedin_icon from "../../assets/linkedin-svgrepo-com.svg";
import github_icon from "../../assets/github-svgrepo-com.svg";
import email_icon from "../../assets/email-9-svgrepo-com.svg";






function Contact() {
  return (
    <div className="contact-div">
      <div className="contact-left">
        <h2 className="contact-item">Let's Work Together!</h2>
        <p className="contact-item">
          {" "}
          I am always looking for new oppurtunities to learn more technology and
          further my skills.{" "}
        </p>
      </div>
      <div className="contact-right">
        <div className="contact-details">
            <div className="icon-shell">
            <div
            className="social-icon"
            style={{ backgroundImage: `url(${linkedin_icon})` }}
          ></div>
            </div>
          
            <div className="link-or-email-div"></div>

        </div>
        <div className="contact-details">
            <div className="icon-shell">
            <div
            className="social-icon"
            style={{ backgroundImage: `url(${github_icon})` }}
          ></div>
            </div>
         
            <div className="link-or-email-div"></div>

        </div>
        <div className="contact-details">
            <div className="icon-shell">
            <div
            className="social-icon"
            style={{ backgroundImage: `url(${email_icon})` }}
          ></div>
            </div>

            <div className="link-or-email-div"></div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
