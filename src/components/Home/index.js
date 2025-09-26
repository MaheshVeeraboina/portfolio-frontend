import { Component } from "react";
import "./index.css";
import Header from "../Header";

class Home extends Component {
  render() {
    return (
        <>
            <Header />
            <div className="home-content">
                <div className="left">
                    <img src="https://res.cloudinary.com/deih9zcr9/image/upload/v1758779367/Gemini_Generated_Image_b7ib4bb7ib4bb7ib_otaxck.png" alt="profile" className="profile-pic"/> 
                </div>
                <div className="right">
                    <h1>Hi, I'm <span className="name">Mahesh Veeraboina</span></h1>
                    <p className="bio">Passionate about <span className="color"> AI </span>
                    and driven by a love for learning, I have expertise in the <span className="color"> MERN stack </span> (MongoDB, Express.js, React, Node.js). I build scalable, responsive, and high-performance web applications by integrating front-end and back-end technologies seamlessly.</p>
                    <a href='https://drive.google.com/file/d/1X4yjgwRZrK_KxnqU9b4d_oNX6Ve4NeLX/view?usp=drive_link' target="__blank"><button className="resume-btn">View Resume </button></a>
                </div>
            </div>
        </>
    )
    }
}
export default Home;