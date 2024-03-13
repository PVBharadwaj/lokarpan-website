import React, { useState } from "react";
import Fuse from "fuse.js";
import "./NavSearchbar.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "Dummy",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 2,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "test",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 3,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "example",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 4,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "person",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 5,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "pupil",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 6,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "people",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 7,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "member",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 8,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "item",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
];

const fuseOptions = {
  keys: ["name", "position", "description"],
  includeScore: true,
};

const NavSearchbar = (isSearchmenuOpen={isSearchmenuOpen}) => {
  const [queryText, setqueryText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchState, setSearchLength] = useState(false);
  // const [typingActivated, setTypingActivated] = useState(false);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setqueryText("")
    }
  });

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setqueryText(value);

    const fuse = new Fuse(items, fuseOptions);
    const results = fuse.search(value);
    if (results.length > 0) {
      setSearchLength(true);
    }
    setSearchResults(results);
  };

  return (
    <div className="nav-searchbar">
      <div className="nav-form">
        <CiSearch className="react-icon size-80" />
        {isSearchmenuOpen && (
           <input
           className="nav-form-control text-input"
           type="text"
           placeholder="Search..."
           value={queryText}
           onChange={handleSearchChange}
         />
        )}
      </div>
      <div className="search-quick-links">
        {queryText === "" ? (
          <div>
            <h4>Quick Links</h4>
            <ul className="quick-links">
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/moonshots">Careers</Link>
              </li>
              <li>
                <Link to="/our-role">Blog</Link>
              </li>
            </ul>
          </div>
        ) : searchResults.length === 0 ? (
          "No results found"
        ) : (
          searchResults.map((result) => (
            <ul>
              <li key={result.item.id}>
                {" "}
                <a href={result.item.link}>{result.item.name}</a>
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default NavSearchbar;
