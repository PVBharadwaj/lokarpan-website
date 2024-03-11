import { useState } from "react";
import FinancialNav from "../../Navbar/FinancialSubNav/FinancialNav";
import { DataGrid } from "@mui/x-data-grid";
import "./Publications.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Columns = [
  {
    field: "id",
    headerName: "ID",
    width: 250,
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "code",
    headerName: "Code",
    width: 250,
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "description",
    headerName: "Description",
    width: 250, 
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "date",
    headerName: "Date",
    width: 250, 
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "file",
    headerName: "File",
    width: 250,
    flex: 1,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => (
      <button
        className="download-btn"
        onClick={() => handleDownload(params.row.id)}
      >
        Download
      </button>
    ),
  },
];

const Rows = [
  {
    id: 1,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 2,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 3,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 4,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 5,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 6,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 7,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 8,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 9,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 10,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 11,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
];

const handleDownload = (id) => {
  alert(`Downloading file for ID: ${id}`);
};


const Publications = () => {
  const [Typing, setSearchState] = useState(false);
  const customHeader = {
    backgroundColor: "lightblue",
    fontSize: "16px",
    fontWeight: "bold",
  };
  return (
    <>
      <Navbar />
      <FinancialNav navbarTitle="Financials" navitem1="Overview" navitem2="Publications" link1="/financials" link2="/publications" />
      <div className="public-top">
      <h1 className="public-title">
        Let's accelerate sustainable and inclusive growth together.
      </h1>
      <p className="public-desp">
        Lokarpan is a non-profit organization registered under the Societies
        Registration Act 1860 Lokarpan is registered u/s 12A of the Income Tax
        Act, 1961. Lokarpan is registered under the Foreign Contributions
        (Regulation) Act FCRA 136550133, and renewed dated 01.11.2016 for the
        receipt of foreign donations. Lokarpan assumes no obligation to update
        any forward looking statement or information, which speak as of their
        respective dates.
      </p>
      </div>
      <div className="publication-page">      
      <div >
        <h1 className="public-archives">Archives</h1>
      </div>
      <div className="column">
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="">
              Show{" "}
              <select className="publication-form-control" name="" id="">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>{" "}
              Entries
            </label>
          </div>
          <div className="col-sm-6">
            <div>
              <label htmlFor="">
                Search:{" "}
                <input
                  type="search"
                  id={Typing ? "searchInput" : ""}
                  className="publication-form-control"
                  onKeyUp={() => {
                    setSearchState(true);
                  }}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="responsive-data-grid">
        <DataGrid
          className="row"
          rows={Rows}
          columns={Columns.filter((column) => column.field !== "id")}
          pageSize={5}
          rowSpacingType={"margin"}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          headerClassName={customHeader}
          sx={{
            borderColor: "#fff",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
        </div>

      </div>
      </div>
      <Footer />
    </>
  );
};

export default Publications;
