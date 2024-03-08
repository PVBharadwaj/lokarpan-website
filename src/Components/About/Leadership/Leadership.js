import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import SecondaryNav from "../../Navbar/SecondaryNav/SecondaryNav";
import "./Leadership.css";

const Leadership = () => {
  const Desp = [
    {
      id: 1,
      head: "Shareholder Council",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas liberovitae inventore cumque eum laborum, ipsa voluptatem quam soluta unde amet labore consectetur nostrum molestiae odit ex necessitatibus",
    },
    {
      id: 2,
      head: "Shareholder Council",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas liberovitae inventore cumque eum laborum, ipsa voluptatem quam soluta unde amet labore consectetur nostrum molestiae odit ex necessitatibus",
    },
    {
      id: 3,
      head: "Shareholder Council",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas liberovitae inventore cumque eum laborum, ipsa voluptatem quam soluta unde amet labore consectetur nostrum molestiae odit ex necessitatibus",
    },
    {
      id: 4,
      head: "Shareholder Council",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas liberovitae inventore cumque eum laborum, ipsa voluptatem quam soluta unde amet labore consectetur nostrum molestiae odit ex necessitatibus",
    },
  ];

  return (
    <>
      <Navbar />
      <SecondaryNav />
      <div className="lead-page background-grad">
        <h2 className="title1 lead-main-title">Our Leadership</h2>
        <div className="img-contain">
          {" "}
          <img
            className="lead-img"
            src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708890771/Frame_48097347_c30iq9.png"
            alt=""
          />
        </div>
        <div className="lead-rest">
          <div className="desp">
          Lokarpan is led globally by our managing partner; our elected board of directors, known as the Shareholders Council; a global leadership team known as the Acceleration Team; and the leaders of our offices and practices.
          </div>
          <div className="desp-cards">
            {Desp.map((item, index) => (
              <DespCard key={index} item={item} index={index} />
            ))}
          </div>
        <div className="dummy"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const DespCard = ({ item }) => {
  return (
    <div className="desp-card-list">
      <h4>{item.head}</h4>
      <p>{item.des}</p>
    </div>
  );
};

export default Leadership;
