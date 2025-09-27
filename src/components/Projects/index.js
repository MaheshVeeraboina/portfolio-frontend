import { Component } from "react";
import "./index.css";
import { ClipLoader } from "react-spinners";
import Header from "../Header";

const projects = [
  {
    title: "Jobby App",
    description: "A full-stack job portal app where users can search, view, and apply for jobs, with role-based dashboards and secure authentication.",
    techStack: "React | Node.js | Express.js | SQLite | JWT | REST APIs",
    role: "Developed the frontend using React, handled API integration, and implemented secure user authentication.",
    image: "https://res.cloudinary.com/deih9zcr9/image/upload/v1758959756/Screenshot_2025-09-27_132503_adehld.png", // Replace with actual screenshot
    github: "https://github.com/yourusername/jobby-app",
    liveDemo: "https://mkjobby.ccbp.tech/",
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
    image: "https://res.cloudinary.com/deih9zcr9/image/upload/v1758959757/Screenshot_2025-09-27_132317_g2jhh1.png",
    github: "https://github.com/yourusername/nxtwatch",
    liveDemo: "https://nxtwatch.ccbp.tech/",
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
    image: "https://res.cloudinary.com/deih9zcr9/image/upload/v1758959757/Screenshot_2025-09-27_132207_qxbujk.png",
    github: "https://github.com/yourusername/nxttrendz",
    liveDemo: "https://mahiKart.ccbp.tech/",
    keyFeatures: [
      "Browse trending products by category",
      "Add/remove items from cart",
      "Secure checkout with user authentication",
      "Responsive design for mobile and desktop"
    ]
  }
];

class Projects extends Component {
  state = { loading: true };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  renderLoadingView = () => (
    <div className="projects-loader-container" style={{ textAlign: "center", marginTop: "50px" }}>
      <ClipLoader
        height={50}
        width={50}
        radius={9}
        color="#581878"
        ariaLabel="loading-projects"
        visible={true}
      />
      <p>Loading Projects...</p>
    </div>
  );

  renderSuccessView=() => (
    <>   
        <p className="projects-bio">
          Here are some of the projects I have built, showcasing my expertise in full-stack web development, AI integration, and building scalable, high-performance applications.
        </p>
        <ul className="projects-list">
          {projects.map((project, index) => (
            <li key={index} className="project-card">
              <img src={project.image} alt={`${project.title} Screenshot`} className="project-image" />
              <h2 className="project-title">{project.title}</h2>
              {/* <div className="tech-stack">
                {project.techStack.split(" | ").map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div> */}
              <p className="project-description">{project.description}</p>
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Key Features:</strong></p>
              <ul>
                {project.keyFeatures.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <button className="livedemo-btn">Live Demo</button>
                </a>
              </div>
            </li>
          ))}
        </ul>
     </>
  );
  render() {
    const { loading } = this.state;

    return (
      <div className="projects-container">
            <h1 className="projects-heading">My <span className="role">Projects</span></h1>
        {loading ? this.renderLoadingView() : this.renderSuccessView()}
      </div>
    );
  }
}

export default Projects;