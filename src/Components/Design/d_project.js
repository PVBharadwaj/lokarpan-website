import React, { useState } from 'react';
import './d_home.css';
import './d_project.css';
import Fuse from 'fuse.js';
import cardsData from './cardsData.json';
import Cardcon from './imagecard';
import SubnavBar from "./DesignSubNavbar/index";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
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

      <section className='searchfs'>
       
          <form className='fs_serachbar'>
        
            <input type='text' value={query} onChange={handleOnSearch} placeholder='Searchproject' />
          </form>
      
      </section>

      <section section='project_listfs'>
        <div className='container_fs'>
          <Cardcon cards={characterRes} />
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default D_project;
