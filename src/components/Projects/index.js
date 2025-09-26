import { Component } from "react";
import "./index.css";
import Header from "../Header";

const projects = [
  {
    title: "Jobby App",
    description: "A full-stack job portal app where users can search, view, and apply for jobs, with role-based dashboards and secure authentication.",
    techStack: "React | Node.js | Express.js | SQLite | JWT | REST APIs",
    role: "Developed the frontend using React, handled API integration, and implemented secure user authentication.",
    image: "https://via.placeholder.com/300x200.png?text=Jobby+App", // Replace with actual screenshot
    github: "https://github.com/yourusername/jobby-app",
    liveDemo: "#",
    keyFeatures: [
      "Search and filter jobs by category and location",
      "Apply for jobs with a single click",
      "Role-based dashboards for admin and users",
      "JWT-based secure authentication"
    ]
  },
  {
    title: "NxtWatch",
    description: "A YouTube-like video streaming platform with user authentication, video upload, and personalized recommendations.",
    techStack: "React | Node.js | Express.js | SQLite | JWT | REST APIs",
    role: "Implemented frontend components, video display features, and integrated backend APIs for videos and authentication.",
    image: "https://via.placeholder.com/300x200.png?text=NxtWatch",
    github: "https://github.com/yourusername/nxtwatch",
    liveDemo: "#",
    keyFeatures: [
      "Browse and play videos",
      "User authentication and profile management",
      "Like, save, and share videos",
      "Dark mode and responsive design"
    ]
  },
  {
    title: "NxtTrendz",
    description: "A modern e-commerce platform to explore trending products, add items to cart, and complete purchases.",
    techStack: "React | Node.js | Express.js | SQLite | JWT | REST APIs",
    role: "Developed frontend product pages, integrated cart functionality, and connected to backend APIs for products and orders.",
    image: "https://via.placeholder.com/300x200.png?text=NxtTrendz",
    github: "https://github.com/yourusername/nxttrendz",
    liveDemo: "#",
    keyFeatures: [
      "Browse trending products by category",
      "Add/remove items from cart",
      "Secure checkout with user authentication",
      "Responsive design for mobile and desktop"
    ]
  }
];

class Projects extends Component {
  render() {
    return (
        <>
            <Header />
            <div className="projects-container">
                <h1 className="projects-heading">My <span className="role">Projects</span></h1>
                <p>I have did Many Projects in Full Stack Development</p>
                <ul className="projects-list">
                    {projects.map((project, index) => (
                        <li key={index} className="project-card">
                            <img src={project.image} alt={`${project.title} Screenshot`} className="project-image" />
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>

                            <p><strong>Tech Stack:</strong> {project.techStack}</p>
                            <p><strong>Role:</strong> {project.role}</p>
                            <p><strong>Key Features:</strong></p>
                            <ul>
                                {project.keyFeatures.map((feature, fIndex) => (
                                    <li key={fIndex}>{feature}</li>         
                                ))}
                            </ul>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>

                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
    }
}
export default Projects;