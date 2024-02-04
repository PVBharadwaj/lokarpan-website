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
      <SecondaryNav />
      <div className="lead-page">
        <h2 className="title1">Our Leadership</h2>
        <div className="img-contain">
          {" "}
          <img
            className="main-img"
            src="https://www.webii.net/blog/wp-content/uploads/2019/12/making-websites-human-collage-1.jpg"
            alt=""
          />
        </div>

        <div className="desp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil
          quas nam voluptatibus fugiat natus sapiente quo repellat reiciendis
          molestiae aperiam voluptatum enim at molestias doloremque vel neque
          accusamus, consectetur et! Culpa eveniet repudiandae expedita sequi
          eos harum deserunt, praesentium sint consequatur.
        </div>
        <div className="desp-cards">
          {Desp.map((item, index) => (
            <DespCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
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
