import { useState } from "react";
import JHeader from "./components/JHeader";
import JFilter from "./components/JFilter";
import JournalTable from "./components/JournalTable";
import Footer from "./components/Footer"
import "./JRank.css";
import Header from "./components/Header.jsx";
import { colors } from "@mui/material";

// Example data, replace with your actual data source
const data = [

  {
    "Rank": "1",
    "Sourceid": "28773",
    "Title": "Ca-A Cancer Journal for Clinicians",
    "Type": "journal",
    "Issn": "15424863, 00079235",
    "SJR": "106,094",
    "SJR Best Quartile": "Q1",
    "H index": "211",
    "Total Docs. (2023)": "49",
    "Total Docs. (3years)": "124",
    "Total Refs.": "4844",
    "Total Cites (3years)": "35427",
    "Citable Docs. (3years)": "89",
    "Cites / Doc. (2years)": "381,89",
    "Ref. / Doc.": "98,86",
    "%Female": "43,95",
    "Overton": "2",
    "SDG": "35",
    "Country": "United States",
    "Region": "Northern America",
    "Publisher": "Wiley-Blackwell",
    "Coverage": "1950-2023",
    "Categories": "Hematology (Q1); Oncology (Q1)",
    "Areas": "Medicine"
  },
  // Add more data objects as needed
];

function JRank() {
  // State for filtered data
  const [filteredData, setFilteredData] = useState(data);

  // Function to apply filters and update filteredData state
  const applyFilters = (filters) => {
    let filtered = data.filter(
      (item) =>
        (filters.Areas === "All" || item.Areas.includes(filters.Areas)) &&
        (filters.Categories === "All" ||
          item.Categories.includes(filters.Categories)) &&
        (filters.Region === "All" || item.Region === filters.Region) &&
        (filters.Type === "All" || item.Type === filters.Type) &&
        (filters.SDG === "All" || item.SDG === filters.SDG)
    );

    setFilteredData(filtered);
  };

  return (
    <div className="App">
      <Header />
      <JHeader />
      {/* <JFilter applyFilters={applyFilters} /> */}
      <JournalTable data={filteredData} />
      <hr className="separator-line" />
      <Footer />
    </div>
  );
}

export default JRank;
