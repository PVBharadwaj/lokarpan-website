import FinCarousel from "../Carousals/FinancialCaousal/FinCarousal";
import FinancialNav from "../Navbar/FinancialSubNav/FinancialNav";
import "./Financial.css";

const Financials = () => {
  return (
    <>
      <FinancialNav />
      <div className="financial-page">
        <div className="fin-desp-head">
          <h1>Let’s accelerate sustainable and inclusive growth together.</h1>
          <p>
            Lokarpan is a non-profit organization registered under the Societies
            Registration Act 1860. Lokarpan is registered u/s 12A of the Income
            Tax Act, 1961. Lokarpan is registered under the Foreign
            Contributions (Regulation) Act FCRA 136550133, and renewed dated
            01.11.2016 for the receipt of foreign donations. Lokarpan assumes no
            obligation to update any forward looking statement or information,
            which speak as of their respective dates.
          </p>
        </div>
        <div className="fin-annual-repo">
          <h2 className="fin-title">Annual Reports</h2>

          <div className="report-container">
            <FinCarousel />
          </div>
          <div className="report-container">
            <div className="file">
              <i class="bi bi-file-earmark"></i>Test
            </div>
            <div className="file">
              <i class="bi bi-file-earmark"></i>Test
            </div>
            <div className="file">
              <i class="bi bi-file-earmark"></i>Test
            </div>
            <div className="file">
              <i class="bi bi-file-earmark"></i>Test
            </div>
          </div>
        </div>

        <hr />
        <div className="add-repo">
          <h1 className="fin-title">Additional Reports</h1>
          <div className="desp-cards">
            {/* <div className="desp-cards-col"> */}
            <div className="add-repo-text">
              <h3>FCRA</h3>
              <a href="/">
                View Documentation and date{" "}
                <i class="bi bi-arrow-down-circle"></i>
              </a>
            </div>
            <div className="add-repo-text">
              <h3>Section 12A certificate</h3>
              <a href="/">
                View Documentation and date{" "}
                <i class="bi bi-arrow-down-circle"></i>
              </a>
            </div>
            {/* </div> */}
            {/* <div className="desp-cards-col"> */}
            <div className="add-repo-text">
              <h3>80 G certificate</h3>
              <a href="/">
                View Documentation and date{" "}
                <i class="bi bi-arrow-down-circle"></i>
              </a>
            </div>
            <div className="add-repo-text">
              <h3>Pan Card</h3>
              <a href="/">
                View Documentation and date{" "}
                <i class="bi bi-arrow-down-circle"></i>
              </a>
            </div>
            {/* </div> */}
            {/* <div className="desp-cards-col"> */}
            <div className="add-repo-text">
              <h3>Memorandum of Association</h3>
              <a href="/">
                View Documentation and date{" "}
                <i class="bi bi-arrow-down-circle"></i>
              </a>
            </div>
            <div className="add-repo-text">
              <h3>CSR certification letter</h3>
              <a href="/">
                View Documentation and date{" "}
                <i class="bi bi-arrow-down-circle"></i>
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Financials;
