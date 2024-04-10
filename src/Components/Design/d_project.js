import React, { useState, useEffect, useRef } from 'react';
import './d_home.css';
import './d_project.css';
import Fuse from 'fuse.js';
import cardsData from './cardsData.json';
import Cardcon from './imagecard';
import SubnavBar from "./DesignSubNavbar/index";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { TbCalendarUp } from "react-icons/tb";
import { TbCalendarDown } from "react-icons/tb";
import { FcAlphabeticalSortingZa } from "react-icons/fc";
import { FcAlphabeticalSortingAz } from "react-icons/fc";

const D_project = () => {
  const [query, setQuery] = useState('');
  const [CardsData, setCardsData] = useState(cardsData);
  const [isProjDropdownOpen, setProjDropdownOpen] = useState(null); 
  const [AlphabeticalsortingOrder, setAlphabeticalSortingOrder] = useState('Alphabeticalasc');
  const [DatesortingOrder, setDateSortingOrder] = useState('Dateasc');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedProjType, setSelectedProjType] = useState('All');
  const fuse = new Fuse(cardsData, {
    keys: ['title', 'content', 'projectType', 'city', 'state'],
    includeScore: true,
    threshold: 0.4, // Adjust the threshold as needed
  });


  
  const dropdownRef = useRef(null);

  const handleOnSearch = ({ target: { value } }) => {
    setQuery(value);
    const searchResults = fuse.search(value);
    const filteredData = value ? searchResults.map(result => result.item) : cardsData;
    setCardsData(filteredData);
  };

  const handleLocationFilter = (location) => {
    setSelectedLocation(location);
    applyFilters(cardsData, location, selectedProjType); // Pass both location and selectedProjType
    ToggleProjDropdown("location");
  };

  const handleProjTypeFilter = (projType) => {
      setSelectedProjType(projType);
      applyFilters(cardsData, selectedLocation, projType); // Pass both selectedLocation and projType
      ToggleProjDropdown("proj-type");
  };

  const applyFilters = (data, locationFilter, projTypeFilter) => {
      let filteredData = data.filter(item => 
          (locationFilter === 'All' || item.state === locationFilter) &&
          (projTypeFilter === 'All' || item.projectType === projTypeFilter)
      );
      setCardsData(filteredData);
  };

  const ToggleProjDropdown = (dropdownType) => {
    setProjDropdownOpen(isProjDropdownOpen === dropdownType ? null : dropdownType);
  };

  const ToogleSortDatewise = () => {
    const sortedData = [...cardsData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return DatesortingOrder === 'Dateasc' ? dateA - dateB : dateB - dateA;
    });
    setDateSortingOrder(DatesortingOrder === 'Dateasc' ? 'Datedesc' : 'Dateasc');
    setCardsData(sortedData);
  };
  
const ToogleSortAlphabetically = () => {
    const sortedData = [...cardsData].sort((a, b) => {
      return AlphabeticalsortingOrder === 'Alphabeticalasc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    });
    setAlphabeticalSortingOrder(AlphabeticalsortingOrder === 'Alphabeticalasc' ? 'Alphabeticaldesc' : 'Alphabeticalasc');
    setCardsData(sortedData);
};


useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setProjDropdownOpen(null);
    }
  };

  const handleEsc = (event) => {
    if (event.keyCode === 27) { // Esc key
      setProjDropdownOpen(null);
    }
  };

  // document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('keydown', handleEsc);

  return () => {
    // document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('keydown', handleEsc);
  };
}, []);

  

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
              <div className='mobile-sort'>
              <div onClick={ToogleSortDatewise} className='project-sorting sort-datewise d-proj-mobile-only'>
                <span className='sort-inner'>{DatesortingOrder==='Dateasc' ? <TbCalendarUp/> : <TbCalendarDown/>} </span>
              </div>
              <div onClick={ToogleSortAlphabetically} className='project-sorting sort-alphabetcaly d-proj-mobile-only'>
                <span className='sort-inner'>{AlphabeticalsortingOrder==='Alphabeticalasc' ? <FcAlphabeticalSortingZa/> : <FcAlphabeticalSortingAz />} </span>
              </div>
            </div>
            </div>
            <div className='project-dropdown-container proj-type' ref={dropdownRef}>
              <button onClick={() => ToggleProjDropdown("proj-type")} className={`dropdown-toggle-btn active-btn ${isProjDropdownOpen==="proj-type" ? "active" : ""}`} type='button' value={"All"}>
                <span>{selectedProjType}</span>
              </button>
                <div className={`project-dropdown scroll ${isProjDropdownOpen==="proj-type" ? "active" : ""}`}>
                  <button className=' inactive-btn ' onClick={() => handleProjTypeFilter('All')} type='button' value={"All"}>
                    <span>All</span>
                  </button>
                  <button className=' inactive-btn ' onClick={() => handleProjTypeFilter('projtype1')} type='button' value={"Proj1"}>
                    <span>proj type 1</span>
                  </button>
                  <button className=' inactive-btn ' onClick={() => handleProjTypeFilter('projtype2')} type='button' value={"Proj2"}>
                    <span>proj type 2</span>
                  </button>
                  <button className=' inactive-btn ' onClick={() => handleProjTypeFilter('projtype3')} type='button' value={"Proj3"}>
                    <span>proj type 3</span>
                  </button>
                  <button className=' inactive-btn ' onClick={() => handleProjTypeFilter('projtype4')} type='button' value={"Proj4"}>
                    <span>proj type 4</span>
                  </button>
                  <button className=' inactive-btn ' onClick={() => handleProjTypeFilter('projtype5')} type='button' value={"Proj5"}>
                    <span>proj type 5</span>
                  </button>
                </div>
            </div>
            <div className='project-dropdown-container proj-location' ref={dropdownRef}>
              <button onClick={() => ToggleProjDropdown("location")} className={`dropdown-toggle-btn active-btn ${isProjDropdownOpen==="location" ? "active" : ""}`} type='button' value={"All"}>
                <span>{selectedLocation}</span>
              </button>
                <div className={`project-dropdown scroll ${isProjDropdownOpen==="location" ? "active" : ""}`}>
                  <button className=' inactive-btn ' onClick={() => handleLocationFilter('All')} type='button' value={"All"}>
                    <span>All</span>
                  </button>
                  <button className=' inactive-btn ' onClick={() => handleLocationFilter('Maharashtra')} type='button' value={"Loca1"}>
                    <span>Maharashtra</span>
                  </button>
                  <button className=' inactive-btn ' onClick={() => handleLocationFilter('Telengana')} type='button' value={"Loca2"}>
                    <span>Telengana</span>
                  </button>
                  <button className=' inactive-btn ' onClick={() => handleLocationFilter('Uttar Pradesh')} type='button' value={"Loca3"}>
                    <span>Uttar Pradesh</span>
                  </button>
                  <button className=' inactive-btn ' onClick={() => handleLocationFilter('Karnataka')} type='button' value={"Loca4"}>
                    <span>Karnataka</span>
                  </button>
                  <button className=' inactive-btn ' onClick={() => handleLocationFilter('Tamil Nadu')} type='button' value={"Loca5"}>
                    <span>Tamil Nadu</span>
                  </button>
                </div>
            </div>
            <div className='sort-section d-proj-desktop-only'>
              <div onClick={ToogleSortDatewise} className='project-sorting sort-datewise'>
                <span className='sort-inner'>Date {" "} {DatesortingOrder==='Dateasc' ? <TbCalendarUp/> : <TbCalendarDown/>} </span>
              </div>
              <div onClick={ToogleSortAlphabetically} className='project-sorting sort-alphabetcaly'>
                <span className='sort-inner'>Alphabetical {" "} {AlphabeticalsortingOrder==='Alphabeticalasc' ? <FcAlphabeticalSortingZa/> : <FcAlphabeticalSortingAz />} </span>
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
