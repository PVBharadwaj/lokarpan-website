import React, { useState, useEffect } from "react";
import "./FinCarousal.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxFontSize } from "react-icons/rx";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const FinCarousel = () => {
  const [yearsToShow, setYearsToShow] = useState(6);
  const [selectedYear, setSelectedYear] = useState(null);

  const [annualreports, setAnnualReportData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/annualreports/')
      .then(response => {
        // alert("fetched");
        setAnnualReportData(response.data);
      })
      .catch(error => {
        alert("error");
        console.error('Error fetching Annual Report data:', error);
      });
  }, []);

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setYearsToShow(3);
      } else {
        setYearsToShow(6);
      }
    };

    // Call handleResize on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handleDownload = (reportURL) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = reportURL;
    downloadLink.download = 'CSR_certification.pdf'; // Set the default file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const renderYears = (index) => {
    // alert(index)
    const report = annualreports[index]; // Get the report object at the specified index
    console.log(report)
    console.log(report.report1)
    console.log(report.report2)
      return (
          <div className="reports-container">
            {/* {report.map((report, index) => ( */}
            <div className="report">
            {(report.report1 !== null && selectedYear === report.year) && <FaFileAlt style={{ fontSize: "50px", color: "#333333", padding: "20px" }} onClick={() => handleDownload(report.report1)} />}
            {(report.report2 !== null && selectedYear === report.year) && <FaFileAlt style={{ fontSize: "50px", color: "#333333", padding: "20px" }} onClick={() => handleDownload(report.report2)} />}
            {(report.report3 !== null && selectedYear === report.year) && <FaFileAlt style={{ fontSize: "50px", color: "#333333", padding: "20px" }} onClick={() => handleDownload(report.report3)} />}
          </div>
            {/* ))} */}
          </div>
        );
  };



  const FinCustomPrevArrow = (props) => (
    <div
      {...props}
      className="custom-arrow"
      style={{
        ...props.style,
        bottom: "-14%",
        left: "-2%",
        transform: "translateX(-50%)",
        zIndex: 1,
      }}
    >
      <IoChevronBackOutline className="app-nav-icon"/>
    </div>
  );

  const FinCustomNextArrow = (props) => (
    <div
      {...props}
      className="custom-arrow"
      style={{
        ...props.style,
        bottom: "-14%",
        left: "100%",
        transform: "translateX(50%)",
        zIndex: 1,
      }}
    >
      <IoChevronForward className="app-nav-icon"/>
    </div>
  );





  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <FinCustomPrevArrow />,
    nextArrow: <FinCustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };






  return (
    <>


      <div className="slider-container">
        <Slider className="slider" {...settings}>
          {annualreports.map((report, index) => (
            <div key={index} report={report}>
              {/* <Link onClick={renderYears(index)} to={'#briefcase'}>{report.year}</Link> */}
              <p style={{fontSize: "22px"}} onClick={() => setSelectedYear(report.year)}>{report.year}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div id="briefcase">
        <div>
        {annualreports.map((report, index) => (
          <div key={index}>
            {renderYears(index)}
          </div>
        ))}
        </div>
      </div>

    
    </>
  );
};

export default FinCarousel;
