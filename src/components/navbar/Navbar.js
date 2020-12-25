import "./Navbar.css"
const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <a href="#home" className='logo-link'>Ezekiel</a>
    </div>
    <ul className="navbar-menu">
      <li className="menu-item">
        <a href="#home" className="menu-link">
          Home
        </a>
      </li>
      <li className="menu-item">
        <a href="#skills" className="menu-link">
          Skills
        </a>
      </li>
      <li className="menu-item">
        <a href="#portfolio" className="menu-link">
          Portfolio
        </a>
      </li>
      <li className="menu-item">
        <a href="#about" className="menu-link">
          About Me
        </a>
      </li>
      <li className="menu-item">
        <a href="#contact" className="menu-link">
          Contact Me
        </a>
      </li>
    </ul>
  </nav>
);
export default Navbar;