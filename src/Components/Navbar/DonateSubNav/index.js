import "./index.css";

const DonateSubNav = () => {
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Donate</div>
      <div className="navbar-rest">
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="/donate">Donate</a>
          </li>
          <li className="navbar-item">
            <a href="/faqs">Faq</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DonateSubNav;
