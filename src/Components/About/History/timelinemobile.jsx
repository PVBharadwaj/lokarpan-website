import React, { Component } from 'react';
import './histroy.css'
import Timemobile from './timeline/timemobile';
class Timelinemobile extends Component {
    render() {
        return (
            <div>
                <div className='history-year'>2020</div>
              <Timemobile 
              heading="Adding years to life and life to years"
              content="The McKinsey Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, 
              and communities to realize possible gains in life expectancy and quality of life. 
              It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health."
              image={<img src="your-image-source.jpg" alt="Your Alt Text" />}/>
               <Timemobile 
              heading="Adding years to life and life to years"
              content="The McKinsey Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, 
              and communities to realize possible gains in life expectancy and quality of life. 
              It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health."
              image={<img src="your-image-source.jpg" alt="Your Alt Text" />}/>
              <div className='history-year history-year1'>2019</div>
              <Timemobile 
              heading="Adding years to life and life to years"
              content="The McKinsey Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, 
              and communities to realize possible gains in life expectancy and quality of life. 
              It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health."
              image={<img src="your-image-source.jpg" alt="Your Alt Text" />}/>
              
              <div className='history-year history-year1'>2018</div>
              <Timemobile 
              heading="Adding years to life and life to years"
              content="The McKinsey Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, 
              and communities to realize possible gains in life expectancy and quality of life. 
              It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health."
              image={<img src="your-image-source.jpg" alt="Your Alt Text" />}/>
               <Timemobile 
              heading="Adding years to life and life to years"
              content="The McKinsey Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, 
              and communities to realize possible gains in life expectancy and quality of life. 
              It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health."
              image={<img src="your-image-source.jpg" alt="Your Alt Text" />}/>

            </div>
            
        );
    }
}

export default Timelinemobile;