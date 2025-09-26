import { Component } from "react";
import "./index.css";
import Header from "../Header";

// const skills = [
//   // Frontend
//   {
//     category: "Frontend",
//     label: "HTML",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
//   },
//   {
//     category: "Frontend",
//     label: "CSS",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
//   },
//   {
//     category: "Frontend",
//     label: "JavaScript",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
//   },
//   {
//     category: "Frontend",
//     label: "ReactJS",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
//   },
//   {
//   category: "Frontend",
//   label: "Flexbox",
//   imgUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
// },
// {
//   category: "Frontend",
//   label: "Bootstrap",
//   imgUrl: "https://raw.githubusercontent.com/jmnote/z-icons/master/svg/bootstrap.svg"
// },

  


//   // Backend
//   {
//     category: "Backend",
//     label: "NodeJS",
//     imgUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
//   },
//   {
//     category: "Backend",
//     label: "ExpressJS",
//     imgUrl: "https://raw.githubusercontent.com/voodootikigod/logo.js/master/express/express.png"
//   },
//   {
//     category: "Backend",
//     label: "MongoDB",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
//   },
//   {
//     category: "Backend",
//     label: "SQLite",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
//   },
//   {
//     category: "Backend",
//     label: "MySQL",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
//   },

//   // Tools
//   {
//     category: "Tools",
//     label: "Git",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
//   },
//   {
//     category: "Tools",
//     label: "GitHub",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
//   },
//   {
//     category: "Tools",
//     label: "VS Code",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
//   },
  

//   // Others
//   {
//     category: "Others",
//     label: "Python",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
//   },
//   {
//     category: "Others",
//     label: "Java",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
//   },
  
//   {
//     category: "Others",
//     label: "Linux",
//     imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
//   }
// ];

class Skills extends Component {
  state = { category: "All",skills: [] };

  componentDidMount() {
    this.fetchSkills();
  }

  fetchSkills = async () => {
    try {
      const response = await fetch("https://portfolio-backend-2-up64.onrender.com/skills");
      const data = await response.json();
      console.log(data);
      const formattedData = data.map((skill) => ({
        category: skill.category,
        label: skill.label,
        imgUrl: skill.imageUrl,
      }));
      console.log(formattedData);
      this.setState({ skills: formattedData });

    } catch (error) {
      console.error("Error fetching skills:", error);
    } 
  };



  setCategory = (category) => {
    this.setState({ category });
  };

  render() {
    const { category,skills } = this.state;
      console.log(skills);
    const categories = [
      "All",
      ...skills
        .map((skill) => skill.category)
        .filter((value, index, self) => self.indexOf(value) === index),
    ];

    // Filtered skills
    const filteredSkills =
      category === "All"
        ? skills
        : skills.filter((skill) => skill.category === category);

    return (
      <>
        <Header />
        <div className="Skills-container">
          <h1 className="skills-heading">My <span className="role">Skills</span></h1>

       
          <ul className="categories-list">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`category-item ${
                  category === cat ? "active-category" : ""
                }`}
                onClick={() => this.setCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>

         
          <ul className="skills-list">
            {filteredSkills.map((skill) => (
              <li key={skill.label} className="skill-item">
                <img
                  src={skill.imgUrl}
                  alt={skill.label}
                  className="skill-icon"
                />
                <p className="skill-label">{skill.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Skills;
