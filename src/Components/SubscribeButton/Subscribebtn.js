import { useState, useEffect } from "react";
import "./Subscribebtn.css";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Subscribebtn = () => {
  const [popupVisible, setPopup] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const activeElement = document.activeElement;
      const InputText = document.getElementsByClassName("text-input");
      const TextInput = Array.from(InputText);
      const activeElementNotInArray = !TextInput.some(element => element === activeElement);
      
      if (activeElementNotInArray) {
        if (event.key === "s" || event.key === "S") {
          setPopup(true);
        } else if (event.which == 27) {
          setPopup(false);
        }
      }
      };   
      window.addEventListener("keydown", handleKeyPress);
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }, []);

  return (
    <div className="subscribe-container">
      <div className={popupVisible ? "popup-on" : "popup-off"}>
        <div className="popup-back"></div>
        <div className="popup-in">
          <div className="pop">
            <h2>Sunday Snippets</h2>
            {/* <i
              onClick={() => {
                setPopup(false);
              }}
              class="x bi bi-x"
            ></i> */}
            <RxCross2 
              onClick={() => {
                setPopup(false);
              }} 
              className="x"/>
          </div>
          <div className="popup-text">
            <p>
              Join a growing community of more than 400,000 (🤯) friendly
              readers. Every Sunday I share actionable productivity tips,
              practical life advice, and high-quality insights from across the
              web, directly to your inbox.
            </p>
            <form action="">
              <input type="text" placeholder="Email address" />
              <button type="submit">Subscribe</button>
            </form>
            <p>We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
      <button type="submit" className="subscribe-btn main-subscribe-btn">
        Press{" "}
        <span>
          <img
            src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704876734/Vector_mtf1zt.svg"
            alt="subscribe"
            className="subscribe"
          />
        </span>
        anytime to subscribe.
      </button>
    </div>
  );
};

export default Subscribebtn;
