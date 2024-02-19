import React from 'react'
import "./Admission.css"

const Admission = () => {
  return (
    <>
        <div className="admissions-head admissions-div">
          <h1>
          We are thrilled to extend a warm welcome to you as part of the Lokarpan family.
          </h1>
        </div>
        <div className="admissions-div">
        <div className="give-card">
          <div>
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQLhki2-AaQbBTPXNpQ8Nhi_w5S_LukxX18mC0W4RYfhVJ2Wsqo" alt="" />
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7CRbAyNkdfS5HQvoBrrfnjHMhCUabPFOTvf1KB4YVCRNSGZJ" alt="" />
          </div>
        </div>
      </div>
      <div className="admissions-div">
        <div className='admissions-grid'>
        <div className='admission-grid-inner1 admissions-grid-inner'>
            <h3>Faculty</h3>
            <p>Harvard faculty are invested in helping you celebrate your passions. You'll build close and enduring relationships with professors who challenge you to see with new eyes and serve as models of engaged, conscientious leadership.</p>
        </div>
        <div className='admission-grid-inner2 admissions-grid-inner'>
          <p>Faculty  Engagement by the  Numbers</p>
        </div>
        <div className='admission-grid-inner3 admissions-grid-inner side-div'>
            <h3>110</h3>
            <p>Faculty teaching first year seminars</p>
        </div>
        <div className='admission-grid-inner4 admissions-grid-inner side-div'>
        <h3>260</h3>
            <p>Pre-concentration advisors</p>
        </div>
        <div className='admission-grid-inner5 admissions-grid-inner side-div'>
        <h3>7:1</h3>
            <p>Student-to-faculty ratio</p>
        </div>
        <div className='admission-grid-inner6 admissions-grid-inner side-div'>
        <h3>10</h3>
            <p>Median course size</p>
        </div>
        </div>
       
      </div>
    </>
  )
}

export default Admission
