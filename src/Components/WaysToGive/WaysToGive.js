import { Link } from "react-router-dom";
import SupportSubNav from "../Navbar/SupportSubNav/SupportSubNav";
import "./WaysToGive.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const WaysToGive = () => {
  return (
    <>
      <Navbar />
      <SupportSubNav />
      <div className="ways-top">
        <h1>Ways to give</h1>
      </div>
      <div className="ways-page">
        <div className="give-card padding40">
          <div className="give-card-img give-card-img-1"></div>
          <div className="give-card-text">
            <h1>Make a Donation:</h1>
            <p>
            Lokarpan relies on the generosity of a diverse community, including supporters like you, to sustain our impactful work. Your contributions ensure that we can continue to make a difference in rural education and community development.
            </p>
            <Link className="give-card-link" to="/donate">Link to Donate Now</Link>
          </div>
        </div>
        <div className="give-card padding40 give-card-reverse">
          <div className="give-card-text">
            <h1>Supporter Circle:</h1>
            <p>
            Join our Supporter Circle to help us in our mission to empower rural communities through education! As a member, you'll gain special insights into our projects and opportunities to engage with our initiatives throughout the year.
            </p>
            <Link className="give-card-link" to="/">Link</Link>
            {/* <Link className="give-card-link" to="/">Free Membership</Link> */}
          </div>
          <div className="give-card-img give-card-img-2"></div>
        </div>
        <div className="give-card padding40">
          <div className="give-card-img give-card-img-3"></div>
          <div className="give-card-text">
            <h1>Volunteers:</h1>
            <p>
            Become a volunteer and play a vital role in advancing our mission of transforming rural education. Volunteers contribute their time and skills to support our programs, making a meaningful impact in communities we serve.
            </p>
            <Link className="give-card-link" to="/being-a-volunteer">Link for volunteer opportunities</Link>
            <Link className="give-card-link" to="/fellowship">Link for Fellowship</Link>
          </div>
        </div>
        <div className="give-card padding40 give-card-reverse">
          <div className="give-card-text">
            <h1>Corporate Partnerships:</h1>
            <p>
            Partner with us to create lasting change in rural education! Your corporate support enables us to expand our reach and make education accessible to more children. Join our community of supporters and gain exclusive insights into our projects and initiatives.
            </p>
            <Link className="give-card-link" to="/">Link</Link>
            {/* <Link className="give-card-link" to="/">Free Membership</Link> */}
          </div>
          <div className="give-card-img give-card-img-4"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WaysToGive;
