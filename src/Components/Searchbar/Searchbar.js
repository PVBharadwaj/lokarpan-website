import { useState } from "react";
import "./Searchbar.css";

const SearchBar = () => {
  const [Typing, setSearchState] = useState(false);
  return (
    <div>
      <div className="search-bar">
        <input
          className="form-control"
          id={Typing ? "searchInput" : ""}
          type="text"
          placeholder="Search by name or position"
          onMouseDown={() => {
            setSearchState(true);
          }}
          onKeyUp={() => {
            UserSearch();
          }}
        />
      </div>
    </div>
  );
};

const UserSearch = () => {
  const users = document.getElementsByClassName("profile-name");
  const titles = document.getElementsByClassName("profile-position");
  const profiles = document.getElementsByClassName("profile-text");
  let searchquery = document.getElementsByClassName("form-control")[0].value;
  searchquery = searchquery.toLocaleUpperCase();
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].innerText.toLocaleUpperCase().indexOf(searchquery) > -1 ||
      titles[i].innerText.toLocaleUpperCase().indexOf(searchquery) > -1 ||
      profiles[i].innerText.toLocaleUpperCase().indexOf(searchquery) > -1
    ) {
      users[i].parentElement.parentElement.style.display = "";
    } else {
      users[i].parentElement.parentElement.style.display = "none";
    }
  }
};

export default SearchBar;
