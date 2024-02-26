import React from 'react'
import "./Kith.css"
import { Link } from 'react-router-dom'
import KithCarousels from '../Carousals/KithCarousels/KithCarousels'
import Navbar from '../Navbar/KithNavbar'
import Footer from '../KithFooter'

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
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjZBPmgfRr4ngdrnA8f5e0ZxXBIAN6rVqq8b9wvzru_TsDwU6F" alt="" />
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
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbG69Pl6oPrw0d8ohefZLHO7ErlfaSnI_dI8UKYbbI7V6KHPrC" alt="" />
          </div>
        </div>
      </div>
      <div className="kith-overview-div kith-overview-grid">
        <div className='overview-grid-inner kith-overview-grid-inner1'>
          <div>
            <div className='mobile-only' ><img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTmeC1kb-RMfD9-shYUt2sTVyOi3L0trP-jRpYHkJAMJphX_tNK' /></div>
          <p>At McKinsey, we hire people, not degrees. There is no set definition for what exceptional looks like</p>
          <Link to="/" className='kith-link'>Ready to apply? Search for other roles</Link> 
          </div>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner2'>
        <div className='imgdiv'><img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSm9hB4gUwO0rb3qqHwIBNONwS7H9veer79-IzMRZ7kcZxtdTnU' /></div>
        <div className='textdiv'>
          <p>we know it can come from anywhere. We believe in your potential, regardless of your pedigree.</p>  
          <Link to="/" className='kith-link'>Learn more about our interviews</Link> 
        </div>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner3'>
        <p>Exceptional can come anywhere from.</p>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner4'>
          <div className='textdiv'>
          <p>we know it can come from anywhere. We believe in your potential, regardless of your pedigree.</p>
          </div>
          <div className='imgdiv'><img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVKYNv_iiNUsku5exuqrCV3GYYjBbrjyBLtVXwM92bkjNDMcVc' /></div>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner5'>
          <div className='textdiv'>
            <p>At McKinsey, we hire people, not degrees. There is no set definition for what exceptional looks like</p>
            <Link to="/" className='kith-link kith-link-static'>Read more on our Blog</Link> 
          </div>
          <div className='imgdiv'><img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCY2fU5lwPXDIzPGMryEDHAxJ84yMUcvgYT8YMYZTnHmgqeryV' /></div>
        </div>
      </div>
      <div className='kith-overview-div overview-img-div'>
        <div className="kith-overview-img-list">
          <KithCarousels />
        </div>
      </div>
      <div className='kith-overview-div kith-overview-last-div'>
        <h3>Even more places to get Lokarpan</h3>
        <Link to="/" className='overview-link'>Set up your Device</Link>
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg' />
          <img src='https://m.media-amazon.com/images/G/01/mobile-apps/dex/avs/docs/ux/branding/Alexa_Logo_RGB_SQUID._TTH_.png' />
          <img src='https://pngimg.com/d/google_PNG19624.png' />
        </div>
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg' />
          <img src='https://m.media-amazon.com/images/G/01/mobile-apps/dex/avs/docs/ux/branding/Alexa_Logo_RGB_SQUID._TTH_.png' />
          <img src='https://pngimg.com/d/google_PNG19624.png' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Kith;
