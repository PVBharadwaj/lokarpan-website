import React, { useState } from "react";
import "./FlipCard.css";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

const FlipCard = () => {
  const [isFlipped, setFlipped] = useState(false);
  const [isFlipOpen, setFlipOpen] = useState(false);
  const screenWidth = window.innerWidth;
  const handleClickin = () => {
    if(screenWidth > 748){
      setFlipped(true);
    }
    else {
      setFlipOpen(true);
    }
  };

  const handleClickout = () => {
    if(screenWidth > 748){
      setFlipped(false);
    }
    else {
      setFlipOpen(false);
    }
  };

  return (
    <>
      <div className="flip-card">
        <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
          <div className="flip-card-front">
            <div>
              <h1>
                Browse accessories to find new colors to go with your devices.
              </h1>
              <img
                src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708632775/image_327_tg9gsn.png"
                alt=""
              />
            </div>
            <div className="right-align">
              <FaCirclePlus className="size-100" onClick={handleClickin} />
            </div>
          </div>
          <div className="flip-card-back">
            <div>
              <h1>Donars</h1>
              <p>
                A gift to the Harvard Art Museums’ Annual Appeal provides
                crucial support for daily operations while also ensuring that
                the museums will thrive for future generations. Annual support
                from donors helps the museums lead the field in advancing museum
                practice and the study and appreciation of the visual arts.
              </p>
            </div>
            <div className="right-align">
              <IoIosCloseCircle className="size-100" onClick={handleClickout} />
            </div>
          </div>
        </div>
      </div>
      <div className={`flip-not-open ${isFlipOpen ? "flipopened" : ""}`}>  
            {/* <div className="right-align"> */}
            <div className="flip-back">
              <IoIosCloseCircle className="size-80" onClick={handleClickout} />
            </div>
            <div>
              <h1>Donars</h1>
              <p>
                A gift to the Harvard Art Museums’ Annual Appeal provides
                crucial support for daily operations while also ensuring that
                the museums will thrive for future generations. Annual support
                from donors helps the museums lead the field in advancing museum
                practice and the study and appreciation of the visual arts.
              </p>
            </div>
        </div>
    </>
  );
};

export default FlipCard;
