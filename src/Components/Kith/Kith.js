import React from 'react'
import "./Kith.css"
import { Link } from 'react-router-dom'
import KithCarousels from '../Carousals/KithCarousels/KithCarousels'
import Navbar from '../Navbar/KithNavbar'
import Footer from '../KithFooter'
import Marquee from "react-fast-marquee";


const Kith = () => {
  return (
    <>
    <Navbar />
      <div className="kith-overview-head kith-overview-div">
          <h1>Overview</h1>
          <p>Those who venture here—to learn, research, teach, work, and grow—join nearly four centuries of students and scholars in the pursuit of truth, knowledge, and a better world</p>
      </div>
      <div className="kith-overview-div kith-overview-second-div">
          <p>These are just a few of the dedicated individuals who form the backbone of Lokarpan. Each member of our faculty plays a crucial role in driving our initiatives forward and making a positive impact in the communities we serve.</p>
      </div>
      <div className="kith-overview-div kith-overview-third-div">
        <div className="give-card">
          <div>
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709446765/image_275_r2spqz.png" alt="" />
          </div>
          <div className="give-card-text">
            <h3>Who we are?</h3>
            <p>
            As you embark on this journey with us, your commitment and enthusiasm are integral to our success. Lokarpan is built on the principles of transparency, inclusivity, and empowerment.
            </p>
          </div>
        </div>
        <div className="give-card give-card-reverse">
          <div className="give-card-text">
            <h3>Our faculty</h3>
            <p>
            We are proud to introduce the talented and dedicated individuals who make up our esteemed faculty at Lokarpan Non-Profit Organization. Our faculty members bring a wealth of experience, expertise, and a shared commitment to our mission
            </p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709446765/image_276_mfxaup.png" alt="" />
          </div>
        </div>
      </div>
      <div className="kith-overview-div kith-overview-grid">
        <div className='overview-grid-inner kith-overview-grid-inner1'>
          <div>
            <p>At McKinsey, we hire people, not degrees. There is no set definition for what exceptional looks like</p>
            <Link to="/" className='kith-link'>Ready to apply? Search for other roles</Link> 
          </div>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner2'>
          <div>
            <p>we know it can come from anywhere. We believe in your potential, regardless of your pedigree.</p>
            <Link to="/" className='kith-link'>Learn more about our interviews</Link> 
          </div>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner3'>
          <div>
            <p>we know it can come from anywhere. We believe in your potential, regardless of your pedigree.</p>
            <Link to="/" className='kith-link'>Learn more about our interviews</Link> 
          </div>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner4'>
        <p>Exceptional can come anywhere from.</p>
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
            <p>we know it can come from anywhere. We believe in your potential, regardless of your pedigree.</p>
            <div><Link to="/" className='kith-link'>Read more on our blog</Link> </div>
          </div>
        </div>

        <div className='overview-grid-inner kith-overview-grid-inner8'>
          <div>
            <p>we know it can come from anywhere. We believe in your potential, regardless of your pedigree.</p>
            <Link to="/" className='kith-link'>Learn more about our interviews</Link> 
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

        <Marquee className="enrollment-marquee">
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
