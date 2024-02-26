import React, { useState } from "react";
import "./KithDonate.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/KithNavbar";
import Footer from "../KithFooter";
const KithDonate = () => {
  const [donationFrequency, setDonationFrequency] = useState("---");
  const [donationAmount, setDonationAmount] = useState("---");
  const [donationArea, setDonationArea] = useState("---");
  const [processingFee, setProcessingFee] = useState("---");
  const [dropdownState, setDropdown] = useState(false);

  const handleFrequencyChange = (event) => {
    setDonationFrequency(event.target.value);
  };

  const handleAmountChange = (event) => {
    const check = document.getElementById("form-3-percent");
    if (check.checked) {
      check.checked = false;
    }
    const newAmount = event.target.value;
    setDonationAmount(newAmount);
    setProcessingFee(0);
  };

  const handleAreaChange = (event) => {
    setDonationArea(event.target.value);
  };

  const handleDropdownOn = () => {
    setDropdown(true);
  };

  const handleDropdownOff = () => {
    setDropdown(false);
  };

  const handleProcessingFee = (event) => {
    if (event.target.checked) {
      const temp = (3 * parseFloat(donationAmount)) / 100;
      setProcessingFee(temp);
    } else {
      setProcessingFee(0);
    }
  };

  const donamt = { donationAmount };
  const profee = { processingFee };
  const donateAmount = parseFloat(donamt.donationAmount);
  const processFee = parseFloat(profee.processingFee);

  const totalAmount = isNaN(donateAmount + processFee)
    ? 0
    : donateAmount + processFee;

  return (
    <>
      <Navbar />
      <div className="donate-head kith-donate">
          <h1>
            Through the Stronger Together campaign, our goal is to bridge the
            learning loss and strengthen our core program in Akanksha schools
            and communities.
          </h1>
          <div className="citizen-dropdown">
            <div className="citizen-dropdown-inner">
              <input
                type="checkbox"
                id="donate-hyperlink"
                name="donate-hyperlink"
                className="input"
              />
              <label htmlFor="donate-hyperlink" className="drop-content">
                Non-Indian Citizens
              </label>
              <div className="ans-sec">
                <p className="answer">test text</p>
                <p className="answer">test text</p>
              </div>
            </div>
          </div>
        </div>
      <div className="donate-page">
        <div className="donate-form">
          <form action="" method="get">
            <div className="donate-form-inner">
              <div id="donate-section-1" className="donate-part">
                <div className="page-marker">01/06</div>
                <fieldset>
                  <legend className="donate-form-sec-title">
                    How frequently would you like to give?
                  </legend>
                  <div role="radiogroup" className="grid">
                    <input
                      type="radio"
                      name="form-donate-frequency"
                      id="form-donate-frequency-once"
                      className="radio-hidden"
                      value={"Once"}
                      onClick={handleFrequencyChange}
                    />
                    <label
                      className="radio-label frequency"
                      htmlFor="form-donate-frequency-once"
                    >
                      Once
                    </label>
                    <input
                      type="radio"
                      name="form-donate-frequency"
                      id="form-donate-frequency-monthly"
                      className="radio-hidden"
                      value={"Monthly"}
                      onClick={handleFrequencyChange}
                    />
                    <label
                      className="radio-label  frequency"
                      htmlFor="form-donate-frequency-monthly"
                    >
                      Monthly
                    </label>
                  </div>
                </fieldset>
              </div>
              <div id="donate-section-2" className="donate-part">
                <div className="page-marker">02/06</div>
                <fieldset>
                  <legend className="donate-form-sec-title">
                    How much would you like to donate?
                  </legend>
                  <div role="radiogroup" className="grid">
                    <input
                      type="radio"
                      name="form-donate-amount"
                      id="form-donate-amount-10"
                      className="radio-hidden"
                      value={10}
                      onClick={handleAmountChange}
                    />
                    <label
                      className="radio-label  amount"
                      htmlFor="form-donate-amount-10"
                    >
                      ₹10
                    </label>
                    <input
                      type="radio"
                      name="form-donate-amount"
                      id="form-donate-amount-25"
                      className="radio-hidden"
                      value={25}
                      onClick={handleAmountChange}
                    />
                    <label
                      className="radio-label amount"
                      htmlFor="form-donate-amount-25"
                    >
                      ₹25
                    </label>
                    <input
                      type="radio"
                      name="form-donate-amount"
                      id="form-donate-amount-50"
                      className="radio-hidden"
                      value={50}
                      onClick={handleAmountChange}
                    />
                    <label
                      className="radio-label amount"
                      htmlFor="form-donate-amount-50"
                    >
                      ₹50
                    </label>
                    <input
                      type="radio"
                      name="form-donate-amount"
                      id="form-donate-amount-100"
                      className="radio-hidden"
                      value={100}
                      onClick={handleAmountChange}
                    />
                    <label
                      className="radio-label amount"
                      htmlFor="form-donate-amount-100"
                    >
                      ₹100
                    </label>
                    <input
                      type="radio"
                      name="form-donate-amount"
                      id="form-donate-amount-500"
                      className="radio-hidden"
                      value={500}
                      onClick={handleAmountChange}
                    />
                    <label
                      className="radio-label amount"
                      htmlFor="form-donate-amount-500"
                    >
                      ₹500
                    </label>
                    <input
                      className="labelless-input radio-label amount"
                      placeholder="Enter Amount"
                      type="text"
                      name=""
                      id="form-donate-amount-costum"
                      onChange={handleAmountChange}
                    />
                  </div>
                </fieldset>
              </div>
              <div id="donate-section-3" className="donate-part">
                <div className="page-marker">03/06</div>
                <fieldset>
                  <legend className="donate-form-sec-title">
                    What fund would you like your donation to go towards?
                  </legend>
                  <div role="radiogroup" className="grid">
                    <input
                      type="radio"
                      name="form-donate-towards"
                      id="form-donate-towards-problems"
                      className="radio-hidden"
                      value="Must Solve problems"
                      onClick={handleAreaChange}
                    />
                    <label
                      className="radio-label-with-img"
                      htmlFor="form-donate-towards-problems"
                    >
                      <img
                        className="radio-label-with-img-img"
                        src="https://www.colorhexa.com/ebebeb.png"
                        alt=""
                      />
                      <span className="radio-label-with-img-text">
                        Must Solve <br /> problems
                      </span>
                    </label>
                    <input
                      type="radio"
                      name="form-donate-towards"
                      id="form-donate-towards-frontiers"
                      className="radio-hidden"
                      value="Frontiers: HIV & Sickle Cell Disease"
                      onClick={handleAreaChange}
                    />
                    <label
                      className="radio-label-with-img"
                      htmlFor="form-donate-towards-frontiers"
                    >
                      <img
                        className="radio-label-with-img-img"
                        src="https://www.colorhexa.com/ebebeb.png"
                        alt=""
                      />
                      <span className="radio-label-with-img-text">
                        Frontiers: HIV & Sickle Cell
                      </span>
                    </label>
                    <input
                      type="radio"
                      name="form-donate-towards"
                      id="form-donate-towards-empower"
                      className="radio-hidden"
                      value="Empowerment & Opportunity"
                      onClick={handleAreaChange}
                    />
                    <label
                      className="radio-label-with-img"
                      htmlFor="form-donate-towards-empower"
                    >
                      <img
                        className="radio-label-with-img-img"
                        src="https://www.colorhexa.com/ebebeb.png"
                        alt=""
                      />
                      <span className="radio-label-with-img-text">
                        Empowerment & <br /> Opportunity
                      </span>
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="donate-part">
                <div className="page-marker">04/06</div>
                <fieldset>
                  <legend className="donate-form-sec-title">
                    Your Personal Details
                  </legend>
                  <div className="grid">
                    <label
                      className="input-label long"
                      htmlFor="form-donate-first-name"
                    >
                      First Name <br />
                      <input
                        type="text"
                        name="donate-form-first-name"
                        id="form-donate-first-name"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-last-name"
                    >
                      Last Name <br />
                      <input
                        type="text"
                        name="donate-form-last-name"
                        id="form-donate-last-name"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-email"
                    >
                      Email Address <br />
                      <input
                        type="text"
                        name="donate-form-email"
                        id="form-donate-email"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-country"
                    >
                      Country of Residence <br />
                      <input
                        type="text"
                        name="donate-form-country"
                        id="form-donate-country"
                      />
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="donate-part">
                <div className="page-marker">05/06</div>
                <fieldset>
                  <legend className="donate-form-sec-title">
                    Your Billing address
                  </legend>
                  <div className="grid">
                    <label
                      className="input-label long"
                      htmlFor="form-donate-state"
                    >
                      State <br />
                      <input
                        type="text"
                        name="donate-form-state"
                        id="form-donate-state"
                        placeholder="State"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-city"
                    >
                      City/Town <br />
                      <input
                        type="text"
                        name="donate-form-city"
                        id="form-donate-city"
                        placeholder="City"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-address"
                    >
                      Address <br />
                      <input
                        type="text"
                        name="donate-form-address"
                        id="form-donate-address"
                        placeholder="Address"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-pin"
                    >
                      Postal/ Zip Code
                      <br />
                      <input
                        type="text"
                        name="donate-form-pin"
                        id="form-donate-pin"
                        placeholder="Pin-Code"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-mobile"
                    >
                      Mobile <br />
                      <input
                        type="text"
                        name="donate-form-mobile"
                        id="form-donate-mobile"
                        placeholder="+xx xxxxxxxxxx"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-pan"
                    >
                      PAN Number <br />
                      <input
                        type="text"
                        name="donate-form-pan"
                        id="form-donate-pan"
                        placeholder="000 000"
                      />
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="donate-part">
                <div className="page-marker">06/06</div>
                <fieldset>
                  {/* <div className="donation-recap"> */}
                    <div className="donate-form-sec-title">
                      <p className="recap">Donation Recap</p>
                    </div>
                    <hr />
                    <div className="donate-recap-sections">
                      <div className="donate-recap-section">
                        <div>
                          <p className="recap">Donation Type </p>
                          <a href="#donate-section-1">Edit</a>
                        </div>
                        <div>{donationFrequency}</div>
                      </div>
                      <div className="donate-recap-section">
                        <div>
                          <p className="recap">Donation Area</p>
                          <a href="#donate-section-3">Edit</a>
                        </div>
                        <div>{donationArea}</div>
                      </div>
                    </div>
                    <hr />
                    <div className="donate-recap-sections">
                      <div className="donate-recap-section">
                        <div>
                          <p className="recap">Donation Amount</p>
                          <a href="#donate-section-2">Edit</a>
                        </div>
                        <div>{`₹ ${donationAmount}`}</div>
                      </div>
                      <div className="donate-recap-section">
                        <label htmlFor="form-3-percent">
                          <input
                            type="checkbox"
                            onClick={handleProcessingFee}
                            name=""
                            id="form-3-percent"
                          />
                          Add 3% to cover the credit card processing fee
                        </label>
                        <label htmlFor="newsletter-subscription">
                          <input
                            type="checkbox"
                            name=""
                            id="newsletter-subscription"
                          />
                          Subscribe to our newsletter?
                        </label>
                      </div>
                    </div>
                    <hr />
                    <div className="donate-recap-sections">
                      <div className="donate-recap-section">
                        <p className="recap">Credit Card Processing fee</p>
                        <p>{`₹ ${processingFee}`}</p>
                        <p className="recap">Total payment amount</p>
                        <p>{`₹ ${totalAmount}`}</p>
                      </div>
                    </div>
                    <hr />
                  {/* <div /> */}
                </fieldset>
                <div>
                  <div className="donate-submit-section">
                    <div className="apply-btn transparent">
                      <Link to="/donate" className="apply-btn-text-black body-btn">Submit & Enter Payment Details</Link>
                    </div>
                    <p>
                      By submitting your information and making your gift, you
                      agree to the Lokarpan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KithDonate;
