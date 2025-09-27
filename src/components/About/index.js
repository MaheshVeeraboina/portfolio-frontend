import { Component } from "react";
import { FaReact } from 'react-icons/fa'; // Font Awesome
import { IoServer } from "react-icons/io5";
import { AiOutlineHome } from 'react-icons/ai'; // Ant Design

import "./index.css";           
import Header from "../Header";

class About extends Component {
    render() {
        return (
            <>
                 
                <div className="about-content">
                    <h1 >About <span className="role">Me</span></h1>
                    <p className="about-bio">Hi! I’m Veeraboina Mahesh Yadav, a passionate Full Stack Developer skilled in MERN stack,  Node.js, Express, React, and SQLite. I love building web applications and backend systems that solve real problems and create meaningful experiences. Always curious and eager to learn, I enjoy turning ideas into action and growing through challenges.</p>
                    <div className="cards-container">
                    <div className="card">
                      <FaReact size={30} className="icon"/>
                        <h1  className="role">Frontend Developer</h1>
                        <p>Expert in creating responsive, user-friendly interfaces using React, JavaScript, HTML, and CSS. Passionate about delivering seamless web experiences with clean and efficient code.</p>
                    </div>
                    <div className="card">
                        <IoServer size={30} className="icon"/>
                        <h1  className="role">Backend Developer</h1>
                        <p>Skilled in building robust server-side applications using Node.js, Express, and databases like SQLite. Experienced in designing REST APIs and handling backend logic efficiently.</p>
                    </div>
                    <div className="card">
                        <AiOutlineHome size={30} className="icon"/>
                        <h1 className="role">Full Stack Developer</h1>
                        <p>Combines frontend and backend expertise to build complete web applications. Focused on creating scalable, maintainable, and high-performance solutions from UI to server.</p>
                    </div>
                </div>
                    </div> 
                
            </>
        )
    }   
}
export default About;