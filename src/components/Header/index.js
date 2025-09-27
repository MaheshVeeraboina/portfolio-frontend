import { Component } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";

class Header extends Component {
  state = { 
    showMenu: false,
    activeLink: "/"  // track active tab
  };

  toggleMenu = () => this.setState(prev => ({ showMenu: !prev.showMenu }));

  handleTabClick = (path) => {
    this.setState({ activeLink: path, showMenu: false }); // close mobile menu
  }

  render() {
    const { showMenu, activeLink } = this.state;

    const tabs = [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/skills", label: "Skills" },
      { path: "/projects", label: "Projects" },
      { path: "/contact", label: "Contact" },
    ];

    return (
      <header className="header-container">
        <div className="left-section">
          <Link to="/" className="link-item" onClick={() => this.handleTabClick("/")}>
            <h1 className="namee lgname">Mahesh Veeraboina</h1>
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="hamburger" onClick={this.toggleMenu}>
          <GiHamburgerMenu size={20} />
        </div>

        <ul className={`nav-links ${showMenu ? "show-menu" : ""}`}>
          {tabs.map(tab => (
            <li key={tab.path}>
              <Link
                to={tab.path}
                className={`lii ${activeLink === tab.path ? "active" : ""}`}
                onClick={() => this.handleTabClick(tab.path)}  // closes menu on click
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}

export default Header;
