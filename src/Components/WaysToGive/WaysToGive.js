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
        <div className="give-card">
          <div>
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708635200/image_341_ym6hdk.png" alt="" />
          </div>
          <div className="give-card-text">
            <h1>Make a Gift</h1>
            <p>
              The work of the Harvard Art Museums would not be possible without
              the support of an international community of generous alumini and
              friends, includung our Friends and Fellows. Contributions help
              ensure that the museums remain an active, innovative centre for
              teaching, learning and research.
            </p>
            <Link className="give-card-link" to="/make-a-gift">Annual Fund</Link>
          </div>
        </div>
        <div className="give-card give-card-reverse">
          <div className="give-card-text">
            <h1>Friends Circle</h1>
            <p>
              By becoming a Friends Circle member, you are supporting our
              mission to make art accessiblr to everyone! Our community of
              Friends recieves unparalleled access to our collections and
              special opportunities to engage with art throughout the year.
            </p>
            <Link className="give-card-link" to="/">Friends Circle Benifits</Link>
            <Link className="give-card-link" to="/">Free Membership</Link>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708635201/image_340_ufii5c.png" alt="" />
          </div>
        </div>
        <div className="give-card">
          <div>
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708635201/image_344_fiaeft.png" alt="" />
          </div>
          <div className="give-card-text">
            <h1>Fellows</h1>
            <p>
              By becoming a Friends Circle member, you are supporting our
              mission to make art accessiblr to everyone! Our community of
              Friends recieves unparalleled access to our collections and
              special opportunities to engage with art throughout the year.
            </p>
            <Link className="give-card-link" to="/">Friends Circle Benifits</Link>
            <Link className="give-card-link" to="/">Free Membership</Link>
          </div>
        </div>
        <div className="give-card give-card-reverse">
          <div className="give-card-text">
            <h1>Corporate Support</h1>
            <p>
              By becoming a Friends Circle member, you are supporting our
              mission to make art accessiblr to everyone! Our community of
              Friends recieves unparalleled access to our collections and
              special opportunities to engage with art throughout the year.
            </p>
            <Link className="give-card-link" to="/">Friends Circle Benifits</Link>
            <Link className="give-card-link" to="/">Free Membership</Link>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708635217/image_342_seejwv.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WaysToGive;
