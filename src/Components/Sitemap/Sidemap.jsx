import React, { Component } from 'react';
import Sd from './Sitemap.svg';
import './Sidemap.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
class Sidemap extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <div className='sidemapimg'>
               <img src={Sd} className='full-screen-img' alt="Sitemap" /> 
            </div>
            <Footer/>
            </>
        );
    }
}

export default Sidemap;
