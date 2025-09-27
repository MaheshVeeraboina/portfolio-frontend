import { Component } from "react";
import "./index.css";
import { ClipLoader } from "react-spinners";
import { BsCheckCircleFill } from "react-icons/bs";
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
    status: "", // 'loading', 'success', or 'error'
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;

    if (!name || !email || !message) {
      this.setState({ status: "error" });
      return;
    }

    // Simulate sending data
    this.setState({ status: "loading" });

    setTimeout(() => {
      this.setState({
        status: "success",
        name: "",
        email: "",
        message: "",
      });
    }, 2000); // simulate 2s loading
  };

  renderStatusMessage = () => {
    const { status } = this.state;
    if (status === "loading") {
      return (
        <div className="status-container">
          <ClipLoader
            height={30}
            width={30}
            color="#0b69ff"
            ariaLabel="loading"
          />
          <p>Sending message...</p>
        </div>
      );
    }
    if (status === "success") {
      return <p className="status-message success"><BsCheckCircleFill style={{ color: "#03c326ff", marginRight: "8px" }} />Message sent successfully!</p>;
    }
    if (status === "error") {
      return <p className="status-message error">Please fill all fields!</p>;
    }
    return null;
  };

  render() {
    const { name, email, message } = this.state;

    return (
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
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={this.handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={this.handleChange}
                required
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Hi I'd like to talk about..."
                value={message}
                onChange={this.handleChange}
                required
              />
              <button type="submit" className="btn">
                Send Message <IoSend />
              </button>
              {this.renderStatusMessage()}
            </form>
          </div>
        </div>
        <footer className="footer">
          <p>© 2025 Mahesh Veeraboina. All rights reserved.</p>
        </footer>

      </div>
    );
  }
}

export default Contact;
