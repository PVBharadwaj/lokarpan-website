

import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

const ContactSubNav = () => {
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Contact</div>
      <div className="navbar-rest">
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/staff">Get in Touch</Link>
          </li>
          <li className="navbar-item">
            <Link to="/educators">Subscribe</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ContactSubNav;
