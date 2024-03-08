
import './Mission.css';
import FAQ from "./faq";
import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
const Mission = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Give People a Voice",
      answer:
        "We work to make technology accessible to everyone, and our business model is ads so our services can be free.",
      open: false,
    },
    {
      question: "Build Connection and Community",
      answer: "We work to make technology accessible to everyone, and our business model is ads so our services can be free.",
      open: false,
    },
    {
      question:
        "Serve Everyone",
      answer: "We work to make technology accessible to everyone, and our business model is ads so our services can be free.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
<div>
  <Navbar/>
    <div className="mission-section-container">
      <section className='mission-1st-secction'>
        <div className='mission-head'>Our purpose, mission, and values</div>
       
        <div className='mission-content1'>To help our clients make distinctive, lasting, and substantial improvements 
        in their performance and to build 
        a great firm that attracts, develops, excites, and retains exceptional people.</div>
        <div className='mission-content2'>We are a values-driven organization. Our values reflect the thinking of our founder, 
        James O. McKinsey, and Marvin Bower, managing director from 1950 to 1967, who was a major force in shaping the firm. Our 
        values have been updated in small ways to reflect the changing times. They inform both our long-term strategy as a firm 
        and the way we serve our clients on a daily basis. 
        We put aside one day a year to reflect as a group on what our values mean to both our work and our lives.</div>
        </section>
        <section className='our-purpose'>
           
            <div className='image-cont'>
      
            <div className='h1'>Our purpose</div>
                <div className='purpose-cont'>The McKinsey Health Institute launches 
                with a mission of catalyzing the actions needed across continents,
                 sectors, and communities to realize possible gains in life 
                 expectancy and quality of life.
                 It co-founds the World Wellbeing Movement, 
                 a global movement promoting
                  employee wellbeing and health.</div>
            </div>
          
            <div className='image-purpose'>
              <div className='imgg'></div>
              
            </div>
            </section>
      <section className='our-purpose-mobile'>
      
      <div className='our-purpose1-image'>
          
          </div>
          <div className='our-purpose-mobile-h1'>Our purpose</div>
                <div className='our-purpose-mobile-cont'>The McKinsey Health Institute launches 
                with a mission of catalyzing the actions needed across continents,
                 sectors, and communities to realize possible gains in life 
                 expectancy and quality of life.
                 It co-founds the World Wellbeing Movement, 
                 a global movement promoting
                  employee wellbeing and health.</div>
            
            </section>
    <section className='our-mission-mobile'>
      <div className='our-mission-mobile-image'></div>
      <div className='our-mission-text'>
          <div className='our-mission-text-heading'>Our Mission</div>
          <div className='our-mission-text-content'>To help our clients make distinctive, lasting, and 
            substantial improvements in their performance and to build 
            a great firm that attracts, develops,
             excites, and retains exceptional people.</div>
        <div className='our-mission-text-button'><button>Read More</button></div>
          </div>
    </section>


       
        <section className='our-purpose'>
           
            <div className='image-cont'>
      
            <div className='h1'>Our Principles</div>
                <div className='purpose-cont'>They embody what we stand for and guide our
                 approach to how we 
                build technology for people and their relationships.</div>
                <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
                
            </div>
           
            <div className='image-purpose'>
              <div className='imgg'></div>
              
            </div>
            

        </section>
        <section className='our-purpose1'>
          <div className='our-purpose1-image'>
          
          </div>
           
           <div className='image-cont1'>
     
           <div className='h2'>Our Principles</div>
               <div className='purpose-cont1'>They embody what we stand for and guide our
                approach to how we 
               build technology for people and their relationships.</div>
               <div className="faqs">
       {faqs.map((faq, index) => (
         <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
       ))}
     </div>
               
           </div>
          
           
           

       </section>
<section className='our-vision'>
  <div className='our-vision-head'>Our Values</div>
  <div className='our-vision-subhead'>Adhere to the highest professional standards</div>
 < div className='our-vision-text'>We are a values-driven organization. Our values reflect the thinking of our founder, James O. McKinsey, and 
 Marvin Bower, managing director from 1950 to 1967, who was a major force in shaping the firm. Our values have been updated in 
 small ways to reflect the changing times. They inform both our long-term strategy as a firm and the way we serve our clients 
 on a daily basis. We put aside one day 
 a year to reflect as a group on what our values mean to both our work and our lives.</div>
 <div className='our-vision-button'><button>Loren Ipsun</button></div>
</section>
      
      
    </div>
    <Footer/>
    </div>
  );
};

export default Mission;