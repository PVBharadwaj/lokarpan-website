import React, { useState, useEffect } from 'react';
import './histroy.css';
import Time from './timeline';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import BackToTopButton from './backtotop';
import Timelinemobile from './timelinemobile';
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import SubNavbar from '../../Navbar/SubNavbar';

const History = () => {

  const [TimelineData, setTimelineData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/timeline/')
      .then(response => {
        setTimelineData(response.data);
        // alert("success");
      })
      .catch(error => {
        alert("error");
        console.error('Error fetching the data:', error);
      });
  }, []);


  const scrollToYear = (year) => {
    const element = document.getElementById(year);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filterByDecade = (decade) => {
    let targetYear = null;
    TimelineData.filter(item => {
      const itemYear = parseInt(item.Year);
      const yeararray = itemYear >= decade && itemYear < decade + 10;
      if (yeararray) {
        targetYear = itemYear;
        return true; 
      }
      return false;
    });
    if (targetYear) {
      scrollToYear(targetYear.toString());
    }
    else {
      alert("Sorry!! No data found for this input")
    }
  };
  
  return (
    <>
    <Navbar/>
        <SubNavbar />
    <div className="history-left-side-mobile">

<div className='history-lsh1-mobile'>History</div>
<div className='history-lsh2-mobile'> <div className='history-lsh21-mobile'>of our </div> Firm</div>

</div>
<div className='history-top_section'>
      <div className="history-left-side">

        <div className='history-lsh1'>History</div>
        <div className='history-lsh2'> <div className='history-lsh21'>of our </div> Firm</div>
       
      </div>
      <div className="history-right-side">
      <p className='history-subheader'>Since our formation in 1926, Lokarpan has 
      operated as a single global partnership united by a strong set of 
      values, and the drive to deliver positive, enduring change.</p>
      <p className='history-subheader1'>Today, we continue to combine bold 
      strategies and transformative technologies to support organizations to 
      innovate more sustainably, achieve lasting gains in performance, and 
      build workforces that will thrive for this generation and the next.</p>
      </div>
      </div>
    <div className="history-section-container">
      
      {/* ------------------------- */}
      
      {/* -------------------- */}
      <div className="history-jumto">Jump to :</div>

      <div className="history-buttons">
        <button onClick={() => filterByDecade(2020)}>2020's</button>
        <button onClick={() => filterByDecade(2010)}>2010's</button>
        <button onClick={() => filterByDecade(2000)}>2000's</button>
        <button onClick={() => filterByDecade(1990)}>1990's</button>
      </div>
     <div class='history-down'><FontAwesomeIcon icon={faChevronDown} /></div>
     <div className="timeline-desk">
     <Time  /></div> 
     <div  className="timeline-mobile">
     <Timelinemobile/>
     </div>
    
     
    <BackToTopButton/>
    </div>
    <Footer/>
    </>
  );
};

export default History;
