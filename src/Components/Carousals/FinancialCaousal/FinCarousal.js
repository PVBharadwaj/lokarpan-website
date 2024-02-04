import React, { useState, useEffect } from "react";
import "./FinCarousal.css";

const FinCarousel = () => {
  const [currentYear, setCurrentYear] = useState(2023);
  const [yearsToShow, setYearsToShow] = useState(6);
  const numberOfYears = 10;
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
  const appear = numberOfYears === yearsToShow;

  const handlePrev = () => {
    if (currentYear < 2023) {
      setCurrentYear(currentYear + 1);
    }
  };

  const handleNext = () => {
    if (currentYear > 2023 - (numberOfYears - yearsToShow)) {
      setCurrentYear(currentYear - 1);
    }
  };

  const renderYears = () => {
    const years = [];
    for (let i = 0; i < yearsToShow; i++) {
      years.push(
        <div className="years" key={currentYear - i}>
          {currentYear - i}
        </div>
      );
    }
    return years;
  };

  return (
    <>
      <button
        className={"carousal-btn years-row"}
        id={appear ? "btn-off" : ""}
        onClick={handlePrev}
        disabled={currentYear >= 2023}
      >
        <i class="bi bi-arrow-left-circle icon-100"></i>
      </button>
      <div className="years-row">{renderYears()}</div>

      <button
        className="carousal-btn years-row"
        id={appear ? "btn-off" : ""}
        onClick={handleNext}
        disabled={currentYear <= 2023 - (numberOfYears - yearsToShow)}
      >
        <i class="bi h2 bi-arrow-right-circle icon-100"></i>
      </button>
    </>
  );
};

export default FinCarousel;
