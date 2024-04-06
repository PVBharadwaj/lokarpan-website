import React, { useState } from 'react';
import './d_home.css';
import './d_project.css';
import Fuse from 'fuse.js';
import cardsData from './cardsData.json';
import Cardcon from './imagecard';
import SubnavBar from "./DesignSubNavbar/index";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CiCalendarDate } from "react-icons/ci";
import { FcAlphabeticalSortingAz } from "react-icons/fc";

const D_project = () => {
  const [query, setQuery] = useState('');
  const [CardsData, setCardsData] = useState(cardsData);
  const [isProjDropdownOpen, setProjDropdownOpen] = useState(null);  
  const [sortingOrder, setSortingOrder] = useState('asc');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedProjType, setSelectedProjType] = useState('All');
  const fuse = new Fuse(cardsData, {
    keys: ['title', 'content'],
    includeScore: true,
    threshold: 0.4, // Adjust the threshold as needed
  });




  const handleOnSearch = ({ target: { value } }) => {
    setQuery(value);
    const searchResults = fuse.search(value);
    const filteredData = value ? searchResults.map(result => result.item) : cardsData;
    applyFilters(filteredData);

      //   setQuery(value);
  //   const searchResults = fuse.search(value);
  //   setCardsData(value ? searchResults.map(result => result.item) : cardsData);
  };

  const applyFilters = (data) => {
    let filteredData = data;
    if (selectedLocation !== 'All') {
      filteredData = filteredData.filter(item => item.location === selectedLocation);
    }
    if (selectedProjType !== 'All') {
      filteredData = filteredData.filter(item => item.projectType === selectedProjType);
    }
    setCardsData(filteredData);
  };

  const handleLocationFilter = (location) => {
    // setSelectedLocation(location);
    const filteredData = cardsData.filter(item => location === 'All' || item.location === location);
    applyFilters(filteredData);
    ToggleProjDropdown("location")
  };

  const handleProjTypeFilter = (projType) => {
    // setSelectedProjType(projType);
    const filteredData = cardsData.filter(item => projType === 'All' || item.projectType === projType);
    applyFilters(filteredData);
    ToggleProjDropdown("proj-type")
  };

  const ToggleProjDropdown = (dropdownType) => {
    setProjDropdownOpen(isProjDropdownOpen === dropdownType ? null : dropdownType);
  };

  const ToogleSortDatewise = () => {
    const sortedData = [...cardsData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortingOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setSortingOrder(sortingOrder === 'asc' ? 'desc' : 'asc');
    setCardsData(sortedData);
  };
  
const ToogleSortAlphabetically = () => {
    const sortedData = [...cardsData].sort((a, b) => {
      return sortingOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    });
    setSortingOrder(sortingOrder === 'asc' ? 'desc' : 'asc');
    setCardsData(sortedData);
};

  

  return (
    <div>
      <Navbar/>
      <SubnavBar/>
      {/* ------------------------------------------------------------- */}
      <section className='d_home_hero'>
        <div className='d_home_hero_head1'>Meet the A-list of </div>
        <div className='d_home_hero_head2'>Entertainment.</div>
        <div className='d_home_hero_content'>
          Award-winning movies. Binge-worthy shows. Your favorite music mastered in Spatial Audio. And the most epic
          collection of mobile games. The best entertainment and experiences live here only on Apple.
        </div>
      </section>

      <section className='searchfs filter-container'>
        <div className='filter-container-inner'>
          <div className='filters'>
            <div className='proj-search-container'>
              <input className='project-form-control text-input with-icon' type='text' value={query} onChange={handleOnSearch} placeholder='Search project' />
            </div>
            <div className='project-dropdown-container proj-type'>
              <button onClick={() => ToggleProjDropdown("proj-type")} className='dropdown-toggle-btn active-btn ' type='button' value={"All"}>
                <span>All project types</span>
              </button>
                <div className={`project-dropdown ${isProjDropdownOpen==="proj-type" ? "active" : ""}`}>
                  <button className='dropdown-toggle-btn inactive-btn ' onClick={() => handleProjTypeFilter('All')} type='button' value={"All"}>
                    <span>All</span>
                  </button>
                  <button className='dropdown-toggle-btn inactive-btn ' onClick={() => handleProjTypeFilter('projtype1')} type='button' value={"Proj1"}>
                    <span>proj type 1</span>
                  </button>
                  <button className='dropdown-toggle-btn inactive-btn ' onClick={() => handleProjTypeFilter('projtype2')} type='button' value={"Proj2"}>
                    <span>proj type 2</span>
                  </button>
                  <button className='dropdown-toggle-btn inactive-btn ' onClick={() => handleProjTypeFilter('projtype3')} type='button' value={"Proj3"}>
                    <span>proj type 3</span>
                  </button>
                  <button className='dropdown-toggle-btn inactive-btn ' onClick={() => handleProjTypeFilter('projtype4')} type='button' value={"Proj4"}>
                    <span>proj type 4</span>
                  </button>
                  <button className='dropdown-toggle-btn inactive-btn ' onClick={() => handleProjTypeFilter('projtype5')} type='button' value={"Proj5"}>
                    <span>proj type 5</span>
                  </button>
                </div>
            </div>
            <div className='project-dropdown-container proj-location'>
              <button onClick={() => ToggleProjDropdown("location")} className='dropdown-toggle-btn active-btn ' type='button' value={"All"}>
                <span>All Locations</span>
              </button>
                <div className={`project-dropdown ${isProjDropdownOpen==="location" ? "active" : ""}`}>
                  <button className='dropdown-toggle-btn inactive-btn ' onClick={() => handleLocationFilter('All')} type='button' value={"All"}>
                    <span>All</span>
                  </button>
                  <button className='dropdown-toggle-btn inactive-btn ' onClick={() => handleLocationFilter('location1')} type='button' value={"Loca1"}>
                    <span>location type 1</span>
                  </button>
                  <button className='dropdown-toggle-btn inactive-btn ' onClick={() => handleLocationFilter('location2')} type='button' value={"Loca2"}>
                    <span>location type 2</span>
                  </button>
                  <button className='dropdown-toggle-btn inactive-btn ' onClick={() => handleLocationFilter('location3')} type='button' value={"Loca3"}>
                    <span>location type 3</span>
                  </button>
                  <button className='dropdown-toggle-btn inactive-btn ' onClick={() => handleLocationFilter('location4')} type='button' value={"Loca4"}>
                    <span>location type 4</span>
                  </button>
                  <button className='dropdown-toggle-btn inactive-btn ' onClick={() => handleLocationFilter('location5')} type='button' value={"Loca5"}>
                    <span>location type 5</span>
                  </button>
                </div>
            </div>
            <div className='sort-section'>
              <div onClick={ToogleSortDatewise} className='project-sorting sort-datewise'>
                <span>Date {" "} <CiCalendarDate /></span>
              </div>
              <div onClick={ToogleSortAlphabetically} className='project-sorting sort-alphabetcaly'>
                <span>Alphabetical {" "} <FcAlphabeticalSortingAz /></span>
              </div>
            </div>

          </div>
        </div>

      </section>

      <section section='project_listfs'>
        <div className='container_fs'>
          <Cardcon cards={CardsData} />
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default D_project;
