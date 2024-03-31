import React, { Component } from 'react';
import Sd from './Sitemap.svg';
import './Sidemap.css';

class Sidemap extends Component {
    render() {
        return (
            <div className='sidemapimg'>
               <img src={Sd} className='full-screen-img' alt="Sitemap" /> 
            </div>
        );
    }
}

export default Sidemap;
