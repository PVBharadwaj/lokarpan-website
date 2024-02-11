import React from 'react'
import "./OnlineEnrollment.css"
import { Link } from 'react-router-dom'

const OnlineEnrollment = () => {
  return (
    <>
      <div className="enrollment-head enrollment-div">
        <h1>Welcome to our Admissions portal</h1>
        <p>A Registration of Interest allows you to submit general and contact information for a parent or guardian as well as the potential candidate’s general information. <span><a href='/'>Read more</a></span></p>
        <Link to="/donate" className="apply-btn white">Apply</Link>
      </div>
      <div className="enrollment-div">
        <h1>Start your Application</h1>
        <p>Applications to Kith are submitted online via the Common Application. </p>
      </div>
      <div className="enrollment-form enrollment-div">
      <div className="give-card">
          <div>
            <img src="https://www.colorhexa.com/ebebeb.png" alt="" />
          </div>
          <div className="give-card-text">
            <h1>Application Form</h1>
            <p>
                A Registration of Interest allows you to submit general and contact information for a parent or guardian as well as the potential candidate’s general information.  Read more
            </p>
            <Link to="/make-a-gift">Annual Fund</Link>
          </div>
        </div>
        <div className="give-card give-card-reverse">
          <div className="give-card-text">
            <h1>Registration of Interest</h1>
            <p>
                A Registration of Interest allows you to submit general and contact information for a parent or guardian as well as the potential candidate’s general information.  Read more
            </p>
            <Link to="/">Friends Circle Benifits</Link>
            <Link to="/">Free Membership</Link>
          </div>
          <div>
            <img src="https://www.colorhexa.com/ebebeb.png" alt="" />
          </div>
        </div>
      </div>
      <div className="enrollment-div enrollment-admin">
        <h1>Admissions Contact</h1>
        <div className="admissions-img-list">
        <img src="https://www.colorhexa.com/ebebeb.png" alt="" />
        <img src="https://www.colorhexa.com/ebebeb.png" alt="" />
        <img src="https://www.colorhexa.com/ebebeb.png" alt="" />
        <img src="https://www.colorhexa.com/ebebeb.png" alt="" />
        </div>
      </div>
      <div className="enrollment-page">

      </div>
    </>
  )
}

export default OnlineEnrollment
