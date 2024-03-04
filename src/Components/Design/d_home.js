import React, { Component } from 'react';
import './d_home.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default class d_home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
{/* ------------------------------------------------------------- */}
<section className='d_home_hero'>

    <div className='d_home_hero_head1'>Meet  the A-list of </div>
    <div className='d_home_hero_head2'>Entertainment.</div>
    <div className='d_home_hero_content'>Award winning movies. Binge worthy shows. Your favourite music mastered in Spatial Audio. 
        And the most epic collection of mobile games. The best entertainment and experiences live here only on Apple.</div>
</section>
{/* ------------------------------------------------------------- */}
<section className='d_home_section1_mobile'>
<div className='d_home_section1_mobile_image'></div>
<h1 className='d_home_section1_mobile_text'>Help management understand how planning can cut long term costs and add value to construction</h1>
</section>
<section className='d_home_section1_mobile'>
<div className='d_home_section1_mobile_image'></div>
<h1 className='d_home_section1_mobile_text'>Browse accessories or find new colours to go with your devices.</h1>
</section>


{/* ------------------------------------------------------------- */}
<section className='d_home_section1'>
<div className='d_home_section1_left image_left' ></div>

<div className='d_home_section1_right'>
    <h1 >Browse accessories or find new colours to go with your devices.</h1>
</div>

</section>
{/* ------------------------------------------------------------- */}
<section className='d_home_section2' >

    <h1>Browse accessories or find new colours to go with your devices.</h1>

<div className='d_home_section2_image'></div>

</section>
{/* ------------------------------------------------------------- */}

<section className='d_home_section3'>
    <h1>Design Guideline</h1>
<div className='d_home_section3_box'>
    <div className='d_home_section3_content'>   
     <h1>Help management understand how planning can cut long term costs and add value to construction.</h1>
     </div>


<div className='d_home_section3_image'></div>
</div>
</section>
{/* ------------------------------------------------------------- */}
<section className='d_home_section1'>
    
<div className='d_home_section1_left image_left' ></div>

<div className='d_home_section1_right'>
    <h1 >Browse accessories or find new colours to go with your devices.</h1>
</div>

</section>
<section className='d_home_section1_mobile'>
<h1 className='d_home_section1_mobile_guideline'>Design Guideline</h1>
<div className='d_home_section1_mobile_image'></div>
<h1 className='d_home_section1_mobile_text'>Help management understand how planning can cut long term costs and add value to construction</h1>
</section>
<section className='d_home_section1_mobile'>
<div className='d_home_section1_mobile_image'></div>
<h1 className='d_home_section1_mobile_text1'>Browse accessories or find new colours to go with your devices.</h1>
</section>
{/* ------------------------------------------------------------- */}
<Footer/>
      </div>
    )
  }
}

