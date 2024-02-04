// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa";
// import "./index.css";

// const SubNavbar = ({ isDropdownVisible }) => {
//   console.log("sub", isDropdownVisible);
//   const navbarStyle = isDropdownVisible ? { position: "static" } : {};
//   console.log(navbarStyle);
//   return (
//     <div className="nav-container-sub" style={navbarStyle}>
//       <nav className="sub-nav">
//         <ul className="sub-nav-list">
//           <li className="sub-nav-first-child">
//             <NavLink
//               to={"/our-role"}
//               className="nav-link"
//               style={{ fontSize: "20px", fontWeight: "bold" }}
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to={"/"} className="nav-link">
//               History
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to={"/"} className="nav-link">
//               Mission
//             </NavLink>
//           </li>
//           <li className="browse-section">
//             <p>Browse All</p>
//             <FaAngleDown />
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default SubNavbar;

import { FaAngleDown } from "react-icons/fa";
import "./index.css";
import "./../Navbar.css";

const SubNavbar = () => {
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">About</div>
      <div className="navbar-rest">
        <ul className="navbar-links">
          <li className="navbar-item mobile">
            <a href="/staff">History</a>
          </li>
          <li className="navbar-item mobile">
            <a href="/educators">Mission</a>
          </li>
          <li className="navbar-item dropdown">
            <p>
              Browse all <FaAngleDown />
            </p>
            <div className="dropdown-content">
              <div className="dropdown-container">
                <h4>Explore About</h4>
                <ul>
                  <li>
                    <a href="/our-role">Our Role</a>
                  </li>
                  <li>
                    <a href="/history">History</a>
                  </li>
                  <li>
                    <a href="/our-role">Mission</a>
                  </li>
                  <li>
                    <a href="/leadership">Leadership</a>
                  </li>
                  <li>
                    <a href="/career">Careers</a>
                  </li>
                  <li>
                    <a href="/financials">Financial</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SubNavbar;
