import React, {useState} from "react";
import axios from 'axios';

function Contact() {

const [formData, setFormData] = useState({name: '', email: '', message: ''});

const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    
}

function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:4000/contact', formData).then((res) => {console.log(res.data); setFormData({name: '', email: '', message: ''}); e.target.reset()}).catch((err) => {console.log(err)});
    

}
  

    return(<div className="contact-div">

        <div className="contact-left">
            <h1>Contact me</h1>
            <p>Lets work together! I am always looking for new oppurtunitys to learn more technology and further my skills.  </p>
            
        </div>
        <div className="contact-right">
                <form onSubmit={handleSubmit} className="contact-form">
                    name
                    <input onChange={handleChange} name="name" className="name-input" placeholder="enter your name"></input>
                    email
                    <input onChange={handleChange}  name="email" className="email-input" placeholder="enter your email"></input>
                    message
                    <textarea onChange={handleChange} name="message" className="message-input" placeholder="enter your message" ></textarea>
                    
                    
                    <button   className="submit-contact-btn" type="submit">Submit</button>
                    
                </form>
        </div>


    </div>)
}

export default Contact;