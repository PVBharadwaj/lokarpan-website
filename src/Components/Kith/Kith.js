import React from 'react'
import "./Kith.css"
import { Link } from 'react-router-dom'
import KithCarousels from '../Carousals/KithCarousels/KithCarousels'
import Navbar from '../Navbar/KithNavbar'
import Footer from '../KithFooter'
import Marquee from "react-fast-marquee";
import { FaArrowRightLong } from "react-icons/fa6";


const Kith = () => {
  return (
    <>
    <Navbar />
      <div className="kith-overview-head kith-overview-div">
          <h1>Overview</h1>
          <p>Those who venture here—to learn, research, teach, work, and grow—join nearly three decades of students and scholars in the pursuit of truth, knowledge, and a better world. At Kith, we advocate for quality education as a means to unlock every child's potential, fostering a future where socio-economic barriers do not hinder growth.</p>
      </div>
      <div className="kith-overview-div kith-overview-second-div">
          <p>These are just a few of the dedicated individuals who form the backbone of Lokarpan. Each member of our faculty plays a crucial role in driving our initiatives forward and making a positive impact in the communities we serve.</p>
      </div>
      <div className="kith-overview-div kith-overview-third-div">
        <div className="kith-overview-card">
          <div className='kith-overview-card-img kith-overview-card-img-1'></div>
          <div className="kith-overview-card-text">
            <h3>Who we are?</h3>
            <p>
            Founded in 2014, Kith and Kin School in Auraiya, Uttar Pradesh, aims to elevate education levels, especially in low-income communities. We strive towards a vision where every child receives exceptional education, creating equity that paves the way for India's holistic development. Our ecosystem centres on parent, student, and teacher collaboration.
            </p>
          </div>
        </div>
        <div className="kith-overview-card kith-overview-card-reverse">
          <div className="kith-overview-card-text">
            <h3>Our faculty</h3>
            <p>
            These are just a few of the dedicated individuals who form the backbone of Kith. Our faculty members bring a wealth of experience, expertise, and a shared commitment to our mission. Each member of our staff plays a crucial role in driving our initiatives forward and making a positive impact in the communities we serve.
            </p> <span className='our-role-faculty'>Shunyuan  Zhang, The professor, Lokarpan</span>
          </div>
          <div className='kith-overview-card-img kith-overview-card-img-2'></div>
        </div>
      </div>
      <div className="kith-overview-div grid-head">NEW AT KITH</div>
      <div className="kith-overview-div kith-overview-grid">
        <div className='overview-grid-inner kith-overview-grid-inner1'>
          <div>
            <p>We prioritise accessibility and excellence in education. Join our vibrant learning community today. </p>
            <Link to="/kith/admission" className='kith-link'>Learn more about our Admissions</Link> 
          </div>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner2'>
          <div className='mobile-only'>
            <p>Explore transparent and accessible information about tuition fees and scholarships available to support your child's education journey at the Kith n Kin School</p>
            <Link to="/kith/financials" className='kith-link'>Learn more about our Financials</Link> 
          </div>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner3'>
          <div>
            <p>Explore transparent and accessible information about tuition fees and scholarships available to support your child's education journey at the Kith n Kin School</p>
            <Link to="/kith/financials" className='kith-link'>Learn more about our Financials</Link> 
          </div>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner4'>
        <p>Exceptionalism can come anywhere from.</p>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner5'>
          <div>
            {/* text can be added in this div */}
          </div>
        </div>

        <div className='overview-grid-inner kith-overview-grid-inner6'>
          <div>
            {/* text can be added in this div */}
          </div>
        </div>

        <div className='overview-grid-inner kith-overview-grid-inner7'>
          <div>
            <p>Immerse yourself in our dynamic campus environment, cultural activities and a curriculum tailored to meet the diverse learning needs of students, empowering them to achieve academic excellence and personal growth.</p>
            <div><Link to="/kith/life-at-school" className='kith-link'>Read more about Life at School <FaArrowRightLong/></Link> </div>
          </div>
        </div>

        <div className='overview-grid-inner kith-overview-grid-inner8'>
          <div>
            <p>Access essential information about our school's leadership, employment opportunities, frequently asked questions, and donation options to support our mission.</p>
            <Link to="/kith/leadership" className='kith-link'>Read more </Link> 
          </div>
        </div>
      </div>
      <div className='kith-overview-div overview-img-div'>
        {/* <div className="kith-overview-img-list">
          <KithCarousels />
        </div> */}
        <div className="kith-overview-div-img-list desktop">
          <div>
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463582/ebebeb_hofiqy.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463582/ebebeb_hofiqy.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463582/ebebeb_hofiqy.png" />
          </div>
        </div>

        <Marquee className="kith-marquee">
          <div>
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463582/ebebeb_hofiqy.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463582/ebebeb_hofiqy.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463582/ebebeb_hofiqy.png" />
          </div>
        </Marquee>
      </div>
      <div className='kith-overview-div kith-overview-last-div'>
        <h3>Even more places to get Lokarpan</h3>
        <Link to="/" className='overview-link'>Set up your Device</Link>
        <div>
          <img src='https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463719/image_260_chijgx.png' />
          <img src='https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463718/image_259_yx3vqh.png' />
          <img src='https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463717/image_258_nnzwlj.png' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463719/image_260_chijgx.png' />
          <img src='https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463718/image_259_yx3vqh.png' />
          <img src='https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463717/image_258_nnzwlj.png' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Kith;
