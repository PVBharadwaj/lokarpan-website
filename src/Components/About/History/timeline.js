// DividerSection.jsx

import React, { useState, useEffect } from 'react';
import './histroy.css';
import TimeRight from './timeline/timelineright';
import TimeLeft from './timeline/timelineleft';
import axios from "axios";


const Time = () => {

  const [TimelineData, setTimelineData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/timeline/')
      .then(response => {
        const sortedData = response.data.sort((a, b) => b.Year - a.Year);
        setTimelineData(sortedData);
        console.log(sortedData)
        setTimelineData(response.data);
        // alert("success");
      })
      .catch(error => {
        alert("error");
        console.error('Error fetching the data:', error);
      });
  }, []);

  return (
   <>
    {TimelineData.map((item, index) => (
      <div className='timeline-body' key={index} item={item}>
        <div id={item.Year} className='timeline-date'>{item.Year}</div>
        {item.Headline1 && (
          <TimeRight
            heading={item.Headline1}
            content={item.Description1}
            image={<img src={item.Picture1} alt="Your Alt Text" />}
          />
        )}
        {item.Headline2 && (
        <TimeLeft
          heading={item.Headline2}
          content={item.Description2}
          image={<img src={item.Picture2} alt="Your Alt Text" />}
        />
        )}
        {item.Headline3 && (
        <TimeRight
          heading={item.Headline3}
          content={item.Description3}
          image={<img src={item.Picture3} alt="Your Alt Text" />}
        />
        )}
        {item.Headline4 && (
        <TimeLeft
          heading={item.Headline4}
          content={item.Description4}
          image={<img src={item.Picture4} alt="Your Alt Text" />}
        />
        )}
        {item.Headline5 && (
        <TimeRight
          heading={item.Headline5}
          content={item.Description5}
          image={<img src={item.Picture5} alt="Your Alt Text" />}
        />
        )}
        {item.Headline6 && (
        <TimeLeft
          heading={item.Headline6}
          content={item.Description6}
          image={<img src={item.Picture6} alt="Your Alt Text" />}
        />
        )}
        
  {/* <div className='timeline-date'>2019</div>
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
         */}
        </div>
    ))}
            
   </>

   
  );
};

export default Time;
