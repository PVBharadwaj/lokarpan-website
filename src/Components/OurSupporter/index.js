import { Component } from "react";
import SupportSubNav from "../Navbar/SupportSubNav/SupportSubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./index.css";

class OurSupporter extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SupportSubNav />

        <div className="our-supporter-container">
          <div className="our-supporter-top-section">
            <p className="font48">Our Supporter</p>
            <h1 className="font64">
              With great power comes great responsibility
            </h1>
            <p className="font24">
              Lokarpan understands the value of partnerships. We would like to
              thank our supporters who have helped us grow and stay true to our
              vision. Donate to Lokarpan and take a front seat as we change the
              world!
            </p>
          </div>
          <div className="donor-section">
            <h1 className="font48-left">Donors</h1>
            <div className="donor-below-section">
              <div className="each-sec">
                <p className="font28">$1,000,000 and above</p>
                <h5 className="font20">Catholic Relief Services</h5>
              </div>
              <div className="each-sec">
                <p className="font28">$100,000 to $999,999</p>
                <h5 className="font20">
                  Poorest Areas Civil Society.Department for International
                  Development, UK
                </h5>
              </div>
              <div className="each-sec">
                <p className="font28">Below $100,000</p>
                <h5 className="font20">
                  CreateFund.National Bank for Agriculture and Rural
                  Development, India.Basic Shiksha Adhikaari, India.New Public
                  School.Chief Medical Officer.Kanpur
                </h5>
              </div>
            </div>
          </div>
          <div className="philantropic-section">
            <h1 className="font36">Philanthropic Partners</h1>
            <div className="philantropic-below-section">
              <p>
                Catholic Relief Services Poorest Areas Civil Society Department
                for International Development, UK Create Fund National Bank for
                Agriculture and Rural Development, India MGNREGA, Government of
                India Taproot Foundation
              </p>
              <p>
                State Innovations in Family Planning Services Project Agency
                Development Alternatives USAID The Dalai Lama Foundation HDFC
                Bank Birla Sun Life Insurance
              </p>
            </div>
          </div>
          <div className="in-support-section">
            <h1 className="font48">In-Kind support</h1>
            <div className="in-support-below-section">
              <p>CRS PACS DFID</p>
              <p>Create Fund TARA Akshar+ City Montessori School</p>
            </div>
            <div className="donor-last-sec">
              <p className="font32">
                We strive to be as accurate as possible when recognizing our
                donors. If a mistake is noticed, please contact us at
                support@lokarpan.com
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default OurSupporter;
