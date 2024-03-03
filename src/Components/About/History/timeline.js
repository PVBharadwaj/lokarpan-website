// DividerSection.jsx

import React from 'react';
import './histroy.css';
import TimeRight from './timeline/timelineright';
import TimeLeft from './timeline/timelineleft';


const Time = () => {
  return (
   
      <div className='timeline-body'>
        <div id='2020' className='timeline-date'>2020</div>
    <TimeRight
 heading="Adding years to life and life to years"
 content="The McKinsey Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, 
 and communities to realize possible gains in life expectancy and quality of life. 
 It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health."
 image={<img src="your-image-source.jpg" alt="Your Alt Text" />}
/>
      
<TimeLeft
 heading="Adding years to life and life to years"
 content="The McKinsey Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, 
 and communities to realize possible gains in life expectancy and quality of life. 
 It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health."
 image={<img src="your-image-source.jpg" alt="Your Alt Text" />}
/>
<div className='timeline-date'>2019</div>
    <TimeRight
 heading="Adding years to life and life to years"
 content="The McKinsey Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, 
 and communities to realize possible gains in life expectancy and quality of life. 
 It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health."
 image={<img src="your-image-source.jpg" alt="Your Alt Text" />}
/>
      
<TimeLeft
 heading="Adding years to life and life to years"
 content="The McKinsey Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, 
 and communities to realize possible gains in life expectancy and quality of life. 
 It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health."
 image={<img src="your-image-source.jpg" alt="Your Alt Text" />}
/>

<div className='timeline-date'>
   2018</div>
    <TimeRight
 heading="Adding years to life and life to years"
 content="The McKinsey Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, 
 and communities to realize possible gains in life expectancy and quality of life. 
 It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health."
 image={<img src="your-image-source.jpg" alt="Your Alt Text" />}/>
       
      </div>
   
  );
};

export default Time;
