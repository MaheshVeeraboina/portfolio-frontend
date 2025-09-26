import { act, Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Header extends Component {
  render() {
    const activeLink = window.location.pathname;
    return (
        <div className="header-container">
            <div className="left-section">
                <Link to="/" className="link-item" >
                <h1 className="namee">Mahesh Veeraboina</h1>
                </Link>
            </div>
            <div className="right-section">
                <ul className="nav-links">
                    <Link to="/" className="link-item" ><li className={activeLink === "/" ? "active lii " : "lii"}>Home</li></Link>
                    <Link to="/about" className="link-item" ><li className={activeLink === "/about" ? "active lii" : "lii"}>About</li></Link>
                    <Link to="/skills" className="link-item" ><li className={activeLink === "/skills" ? "active lii" : "lii"}>Skills</li></Link>
                    <Link to="/projects" className="link-item" ><li className={activeLink === "/projects" ? "active lii" : "lii"}>Projects</li></Link>
                    <Link to="/contact" className="link-item" ><li className={activeLink === "/contact" ? "active lii" : "lii"}>Contact</li></Link>
                    
                </ul>
            </div>
        </div>
    )
  }
}
export default Header;