import { Component } from "react";
import "./index.css";
import Header from "../Header";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

class Contact extends Component {

    state = {
    name: "",
    email: "",
    message: "",
    status: "", // For success/error messages
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;

    try {
      const response = await fetch("http://localhost:3000/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        const result = await response.text();
        this.setState({ status: result, name: "", email: "", message: "" });
      } else {
        const error = await response.text();
        this.setState({ status: `Error: ${error}` });
      }
    } catch (err) {
      this.setState({ status: `Error: ${err.message}` });
    }
  };

  render() {
    const { name, email, message, status } = this.state;

    return (
        <>
            <Header />
            <div className="contact-content">
                <h1>Get In <span className="role">Touch</span></h1>
                <div className="contact-inner">
                <div className="left">
                    <h1>Contact Information</h1>
                    <div className="email-container">
                        <MdOutlineMail className="icon-2 color"  size={40} />
                        <div className="email-content">
                            <h3>Email</h3>  
                            <p className="aa">maheshveeraboina632@gmail.com</p>
                        </div>
                    </div>

                    <div className="email-container">
                        <FaPhoneAlt className="icon-2 color"  size={40} />
                        <div className="email-content">
                            <h3>Phone</h3>  
                            <p className="aa">+91 8309358319</p>
                        </div>
                    </div>

                    <div className="email-container">
                        <IoLocationSharp className="icon-2 color"  size={40} />
                        <div className="email-content">
                            <h3>Location</h3>  
                            <p className="aa">Hyderabad,Telangana,India</p>
                        </div> 
                    </div>

                    <h1>Follow Me On</h1>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/mahesh-veeraboina/" target="_blank" rel="noreferrer">
                           <FaLinkedin className="linkedin"  size={30} />
                        </a>

                        <a href="https://github.com/MaheshVeeraboina" target="_blank" rel="noreferrer">
                           <FaGithub className="github"  size={30} />
                        </a>

                        <a href="https://www.instagram.com/mahesh_veeraboina_official/" target="_blank" rel="noreferrer">
                           <BsInstagram className="instagram"  size={30} />
                        </a>
                        
                    </div>
                </div>
                <div className="right">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <h1>Send Me A Message</h1>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" placeholder="Please Enter Your Name" value={name} onChange={this.handleChange} required className="input-box"/>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" name="email" placeholder="Please Enter Your Email" value={email} onChange={this.handleChange} required className="input-box"/>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" rows="6" placeholder="Hi I'd like to talk about..." value={message} onChange={this.handleChange} required className="input-box"/>
                        <button type="submit" className="btn">Send Message <IoSend/></button>
                        {status && <p className="status-message">{status}</p>}
                    </form>
                </div>
                </div>
            </div>
        </>
    )
    }
}
export default Contact;