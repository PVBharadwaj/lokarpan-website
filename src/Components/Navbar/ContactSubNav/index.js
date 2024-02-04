// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa";
// import "./index.css";

// const ContactSubNav = ({ isDropdownVisible }) => {
//   console.log("sub", isDropdownVisible);
//   const navbarStyle = isDropdownVisible ? { position: "static" } : {};
//   console.log(navbarStyle);
//   return (
//     <div className="nav-container-sub" style={navbarStyle}>
//       <nav className="sub-nav">
//         <ul className="sub-nav-list">
//           <li className="sub-nav-first-child">
//             <NavLink to={"/contact-us"} className="nav-link font20">
//               Contact
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to={"/"} className="nav-link">
//               Get in Touch
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to={"/"} className="nav-link">
//               Subscribe
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default ContactSubNav;

import { FaAngleDown } from "react-icons/fa";
import "./index.css";

const ContactSubNav = () => {
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Contact</div>
      <div className="navbar-rest">
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="/staff">Get in Touch</a>
          </li>
          <li className="navbar-item">
            <a href="/educators">Subscribe</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ContactSubNav;
