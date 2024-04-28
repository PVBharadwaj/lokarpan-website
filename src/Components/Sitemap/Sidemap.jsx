import React, { Component } from 'react';

import './Sidemap.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
class Sidemap extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <div className="sitemap-nav">
          <h1>Lokarpan Sitemap</h1>

        </div>

           <section className='sitemap_content'>
           <div>
    <div className='site_item_head'>About</div>
    <ul className='site_item_list'>
    <li>Our Role</li>
        <li>History</li>
        <li>Mission</li>
        <li>Leadership</li>
        <li>Careers</li>
        <li>Financials</li>
        <li>Alumni</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Subscribe</li>
    </ul>
    </div>
    <div>
    <div className='site_item_head'>Education</div>
    <ul className='site_item_list'>
        <li>Approach</li>
        <li>Digital Tools</li>
        <li>Application</li>
        <li>Podcast
</li>
        <li>Impact</li>
        <li>Moonshots</li>
        <li>Volunteer</li>
    </ul>
    </div>
    <div>
    <div className='site_item_head'> Kith</div>
    <ul className='site_item_list'>
        <li>Overview</li>
        <li>Admission</li>
        <li>How to?</li>
        <li>Online Enrollment</li>
        <li>Academics</li>
       
    </ul>
    </div>
           </section>
           <section className='sitemap_content'>
           <div>
    <div className='site_item_head'>Design</div>
    <ul className='site_item_list'>
        <li>Projects</li>
        <li>Design Guidelines</li>
        <li>Resources</li>
    </ul>
    </div>
    <div>
    <div className='site_item_head'>Support</div>
    <ul className='site_item_list' >
        <li>Ways to Give</li>
        <li>Being a Volunteer</li>
        <li>Our Supporters</li>
        <li>Why Donate</li>
        <li>Donate Now</li>
        <li>Our Role</li>
       
    </ul>
    </div>
    <div>
    <div className='site_item_head'>About</div>
    <ul className='site_item_list'>
    <li>Fellowship</li>
    <li>Health</li>
    <li>Environment</li>
    <li>Livelihood</li>
    </ul>
    </div>

    
  

           </section>

            <Footer/>
            </>
        );
    }
}

export default Sidemap;
