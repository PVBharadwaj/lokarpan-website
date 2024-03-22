import React, { useState } from "react";
import FinancialNav from "../../Navbar/FinancialSubNav/FinancialNav";
import { DataGrid } from "@mui/x-data-grid";
import "./Publications.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import axios from "axios";
import { debounce } from "lodash";

const Columns = [
  {field: "id", headerName: "ID", width: 250, headerAlign: "center", align: "center",},
  {field: "year", headerName: "Code", width: 250, headerAlign: "center", align: "center",},
  {field: "reporttitle1", headerName: "Description", width: 250, headerAlign: "center", align: "center",},
  {field: "addedDate", headerName: "Date", width: 250, headerAlign: "center", align: "center",},
  {
    field: "file", headerName: "File", width: 250, headerAlign: "center", align: "center",
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
    year: "AR1",
    reporttitle1: "test",
    addedDate: "Jan 13, 2024",
  },
  {
    id: 2,
    year: "AR1",
    reporttitle1: "test",
    addedDate: "Jan 13, 2024",
  },
  {
    id: 3,
    year: "AR1",
    reporttitle1: "test",
    addedDate: "Jan 13, 2024",
  },
  {
    id: 4,
    year: "AR1",
    reporttitle1: "test",
    addedDate: "Jan 13, 2024",
  },
  {
    id: 5,
    year: "AR1",
    reporttitle1: "test",
    addedDate: "Jan 13, 2024",
  },
  {
    id: 6,
    year: "AR1",
    reporttitle1: "test",
    addedDate: "Jan 13, 2024",
  },
  {
    id: 7,
    year: "AR1",
    reporttitle1: "test",
    addedDate: "Jan 13, 2024",
  },
  {
    id: 8,
    year: "AR1",
    reporttitle1: "test",
    addedDate: "Jan 13, 2024",
  },
  {
    id: 9,
    year: "AR1",
    reporttitle1: "test",
    addedDate: "Jan 13, 2024",
  },
  {
    id: 10,
    year: "AR1",
    reporttitle1: "test",
    addedDate: "Jan 13, 2024",
  },
  {
    id: 11,
    year: "AR1",
    reporttitle1: "test",
    addedDate: "Jan 13, 2024",
  },
];

const handleDownload = (id) => {
  alert(`Downloading file for ID: ${id}`);
};


const Publications = () => {
  // const customHeader = {
  //   backgroundColor: "lightblue",
  //   fontSize: "16px",
  //   fontWeight: "bold",
  // };

  const [searchQuery, setSearchQuery] = useState("");

  const filteredRows = Rows.filter(
    (row) => row.reporttitle1.toLowerCase().includes(searchQuery.toLowerCase()) || row.addedDate.toLowerCase().includes(searchQuery.toLowerCase()) || row.year.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  // const [Rows, setReportData] = useState([]);

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/api/annualreports/')
  //     .then(response => {
  //       alert("success");
  //       setReportData(response.data);
  //     })
  //     .catch(error => {
  //       alert("error");
  //       console.error('Error fetching Annual Report data:', error);
  //     });
  // }, []);


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
              <div>
                <label htmlFor="">
                  {/* Search:{" "} */}
                  <input
                    type="search"
                    className="publication-form-control text-input"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="responsive-data-grid">
            <DataGrid
              rows={filteredRows}
              columns={Columns.filter((column) => column.field !== "id")}
              pageSize={5}
              rowSpacingType={"margin"}
              rowsPerPageOptions={[5, 10, 25, 50, 100]}
              // headerClassName={customHeader}
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
