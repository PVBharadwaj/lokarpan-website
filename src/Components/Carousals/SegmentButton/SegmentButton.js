import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./SegmentButton.css"

const SegmentButton = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
  };

  const segments = [ 'Process','Deadline', 'Scholarships'];

  const handleSegmentClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='segment-button'>
      <Slider {...settings} className='segment-wrapper'>
        {segments.map((segment, index) => (
          <div
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleSegmentClick(index)}
          >
            {segment}
          </div>
        ))}
      </Slider>

      <div className='segments'>
        {segments.map((segment, index) => (
          <div key={index} style={{ display: index === activeIndex ? 'block' : 'none' }}>
            {segment === 'Process' && 
                <div className='segment-button-text'>
                    <div>
                        <h3>Applicants to Kith must have the following:
</h3>
                        <ul>
                            <li>Ensure you have a valid Aadhar card.</li>
                            <li>Provide your Student PEN (Permanent Education Number) code.
</li>
                            <li>Include your UDISE+ (Unified District Information System for Education Plus) portal number.
</li><li>Submit transcripts from your previous educational institutions.
</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Written application</h3>
                        <p>Please complete the application forms and submit the non-refundable application fee of Rs 50. This fee can also be paid online. The link to the payment portal is <span>here</span>.</p>
                        <p>If you have a child currently enrolled at Kith or one who has recently graduated from Kith, please do not create a separate profile for the new prospective student. Instead, we encourage you to log in with your existing account details. If you don't remember your login information, please reach out to us at Admissions@kithnkinschool.org for assistance.
<p></p>Once we review the completed application materials, you will receive an email informing you whether or not the applicant will be invited for the interview and testing.</p>
                    </div>
                    
                    <div>
                        <h3>Interview</h3>
                        <p>If the student is not invited for an interview, this will bring the admissions process to an end. If the student is invited to the school for an interview and testing, we would normally arrange a time and date for a visit, during which time a tour of the school would also be given.
</p>
                    </div>
                    <div>
                        <h3>Financial Aid</h3>
                        <p>If you require “Financial Aid,” kindly specify this in your application. Once indicated, the grant application form will be made available in the checklist. </p>
                    </div>
                </div>
            }
            {segment === 'Deadline' && 
                <div className='segment-button-text'>
                <div>
                    <h3>Your application deadline
</h3>
                    <p>At the Kith and Kin School in Malhausi, we operate two application cycles annually: one running from March to May, and the other from June to August. As of now, applications for the 2023-2024 academic year have concluded. 
</p><p>However, we are currently accepting applications for the 2024-2025 academic year. Prospective students are encouraged to apply before the final application deadline on August 31, 2024, to secure their enrollment at our institution.
</p>
                </div>
                <div>
                    <h3>Apply now or register for more information
</h3>
                    <p>To inquire or apply for the 2024-2025 school year please follow this <span>link</span> .
</p>
                </div>
                
            </div>
            }
            {segment === 'Scholarships' && 
                <div className='segment-button-text'>
               <div>
                    <h3>Scholarships
</h3>
                    <p>At Kith n Kin School, accessibility to quality education is paramount, which is why we're committed to providing scholarships to deserving students. Our scholarship program is designed to assist both based on merit and financial need, ensuring that no qualified student is hindered by financial constraints.
</p><p>Our scholarship application process begins each year in March. Families interested in applying will receive comprehensive instructions on how to navigate our resources effectively.</p>
<p>Once you've submitted your formal application to our institution, we'll guide you through the scholarship process tailored to your specific requirements. For more details on eligibility criteria, please visit our <span>FAQ section</span>.
</p>
                </div>
                <div>
                    <h3>Post-interview Reflection</h3>
                    <p>Within 24 hours of the interview, candidates are required to submit a written reflection through our online application system. Detailed instructions will be provided to those applicants who are invited to interview.</p>
                </div>
            </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegmentButton;
