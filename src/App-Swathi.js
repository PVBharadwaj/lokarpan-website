import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Home from "./Components/Home/index";
import Navbar from "./Components/Navbar/Navbar";
import Career from "./Components/Career/index";
import Leadership from "./Components/About/Leadership/Leadership";
import Board from "./Components/About/Leadership/Board/board";
import Staff from "./Components/About/Leadership/Staff/Staff";
import Educators from "./Components/About/Leadership/Educators/Educators";
import Fellows from "./Components/About/Leadership/Fellows/Fellows";
import OurRole from "./Components/OurRole";
import Footer from "./Components/Footer/Footer";
import Fellowship from "./Components/Fellowship/Fellowship";
import Health from "./Components/Health";
import Financials from "./Components/Financial/Financial";
import Publications from "./Components/Financial/Publications/Publications";
import Faqs from "./Components/Faqs";
import Subscribebtn from "./Components/SubscribeButton/Subscribebtn";
import Application from "./Components/Application/Application";
import Approach from "./Components/Approach";
import DigitalTool from "./Components/DigitalTool";
import Impact from "./Components/Impact/Impact";
import Environemnt from "./Components/Environment";
import Livelihood from "./Components/Livelihood";
import Moonshots from "./Components/Moonshots/Moonshots";
import WaysToGive from "./Components/WaysToGive/WaysToGive";
import MakeAGift from "./Components/MakeAGift/MakeAGift";
import Donate from "./Components/Donate/Donate";
import WhyDonate from "./Components/WhyDonate/WhyDonate";
import BeingAVolunteer from "./Components/BeingAVolunteer/BeingAVolunteer";
import PodCasts from "./Components/Podcasts";
import ContactUs from "./Components/ContactUs";
import OurSupporter from "./Components/OurSupporter";
import Education from "./Components/Education";
import CampusAndCulture from "./Components/CampusAndCulture";
import SafetyAndWellBeing from "./Components/SafetyAndWellBeing";
import ClubAndCommitee from "./Components/ClubAndCommitee";
import Information from "./Components/Information";
import Alumni from "./Components/Alumni";
import KithLeadership from "./Components/KithLeadership";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/lokarpan-website">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<OurRole />}></Route>
          <Route path="/leadership" element={<Leadership />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/staff" element={<Staff />}></Route>
          <Route path="/educators" element={<Educators />}></Route>
          <Route path="/fellows" element={<Fellows />}></Route>
          <Route path="/fellowship" element={<Fellowship />}></Route>
          <Route path="/our-role" element={<OurRole />}></Route>
          <Route path="/health" element={<Health />}></Route>
          <Route path="/financials" element={<Financials />}></Route>
          <Route path="/faqs" element={<Faqs />}></Route>
          <Route path="/publications" element={<Publications />}></Route>
          <Route path="/application" element={<Application />}></Route>
          <Route path="/approach" element={<Approach />}></Route>
          <Route path="/digital-tool" element={<DigitalTool />}></Route>
          <Route path="/impact" element={<Impact />}></Route>
          <Route path="/environment" element={<Environemnt />}></Route>
          <Route path="/livelihood" element={<Livelihood />}></Route>
          <Route path="/moonshots" element={<Moonshots />}></Route>
          <Route path="/make-a-gift" element={<MakeAGift />}></Route>
          <Route path="/ways-to-give" element={<WaysToGive />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/why-donate" element={<WhyDonate />}></Route>
          <Route
            path="/being-a-volunteer"
            element={<BeingAVolunteer />}
          ></Route>
          <Route path="/podcasts" element={<PodCasts />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/our-supporter" element={<OurSupporter />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route
            path="/kith/campus-and-culture"
            element={<CampusAndCulture />}
          ></Route>
          <Route
            path="/kith/safety-and-wellbeing"
            element={<SafetyAndWellBeing />}
          ></Route>
          <Route
            path="/kith/club-and-commitee"
            element={<ClubAndCommitee />}
          ></Route>
          <Route path="/kith/information" element={<Information />}></Route>
          <Route path="/kith/alumni" element={<Alumni />}></Route>
          <Route path="/kith/leadership" element={<KithLeadership />}></Route>
        </Routes>

        <Subscribebtn />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;