import React, { useState } from 'react';

import './leadershipk.css';
import Fuse from 'fuse.js';
import cardsData from './leadername.json';
import Cardcon from './leaderk';

const D_project = () => {
  const [query, setQuery] = useState('');
  const fuse = new Fuse(cardsData, {
    keys: ['content'],
    includeScore: true,
    threshold: 0.4, // Adjust the threshold as needed
  });

  const results = fuse.search(query);
  const characterRes = query ? results.map((result) => result.item) : cardsData;

  const handleOnSearch = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <div>
      {/* ------------------------------------------------------------- */}
      <section >
        <div>
          <div>Leadership</div>
          <div>At Lokarpan, we believe that leadership is not just about holding a title; 
            it's about inspiring positive change and fostering growth within our community. 
            We are excited to share the various leadership opportunities available and the qualities that define our leaders.</div>
        
        </div>
        <div></div>
        
      </section>
      <section>
        <ul>
          <li><span>Executive Leadership Team: </span>Guide the strategic direction of Lokarpan and oversee organizational initiatives.</li>
          <li><span>Committee Leadership: </span>Lead one of our dynamic committees, shaping the path for program development, community outreach, and innovation.</li>
          <li><span>Club Leadership: </span>Inspire and guide members as you lead a club dedicated to environmental stewardship, youth empowerment, or art for social change.</li>
        </ul>
      </section>

      <section className='searchposition'>
        <div>Board</div>
       
          <form className='fs_serachbar'>
           
            <input type='text' value={query} onChange={handleOnSearch} placeholder='Search...' />
          </form>
      
      </section>

      <section section='project_listfs'>
        <div className='container_fs'>
          <Cardcon cards={characterRes} />
        </div>
      </section>
    </div>
  );
};

export default D_project;
