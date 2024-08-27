import { useState } from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Popover,
  Typography,
  Divider,
  Box,
  TextField,
  Button,
} from "@mui/material";
import "../JournalTable.css";
import data from "./data.json";
import JFilter from "./JFilter"; 

function JournalTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [filteredData, setFilteredData] = useState(data); 
  const [selectedRow, setSelectedRow] = useState(null); 
  const [anchorEl, setAnchorEl] = useState(null);
 
  const [searchQuery, setSearchQuery] = useState("");

  
  const applyFilters = (filters) => {
    let filtered = data.filter((row) => {
      
      if (filters.subjectArea !== "All" && row.Areas !== filters.subjectArea)
        return false;
      if (
        filters.subjectCategory !== "All" &&
        row.Categories !== filters.subjectCategory
      )
        return false;
      if (filters.region !== "All" && row.Region !== filters.region)
        return false;
      if (filters.type !== "All" && row.Type !== filters.type) return false;
      if (filters.sdg !== "All" && row.SDG !== filters.sdg) return false;
      if (
        filters.searchQuery &&
        !row.Title.toLowerCase().includes(filters.searchQuery.toLowerCase())
      )
        return false;
      return true;
    });

    
    setFilteredData(filtered);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setSelectedRow(null); 
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setSelectedRow(null); 
  };

  const handleRowClick = (event, row) => {
    setSelectedRow(row);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setSelectedRow(null);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={10} lg={8}>
        
        
        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: "#ffffff" }}>
              Journal Information
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "#ffffff", textAlign: "justify" }}
            >
              A journal is a periodical publication that contains scholarly
              articles, research papers, reviews, and other academic writings.
              Journals are typically focused on specific academic disciplines,
              fields of study, or areas of research. They serve as platforms for
              researchers to disseminate their findings, theories, and analyses
              to the academic and professional communities.
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: "#ffffff", textAlign: "justify" }}
            >
              <strong style={{fontSize: '18px', marginBottom: '10px'}}>Types of Journals</strong>
              <ul>
                <li>Disciplinary Journals</li>
                <li>Interdisciplinary Journals</li>
                <li>Professional Journals</li>
                <li>Open Access Journals</li>
                <li>Subscription-Based Journals</li>
                <li>Peer-Reviewed Journals</li>
                <li>Trade Journals</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: "#ffffff" }}>
              Conference Information
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "#ffffff", textAlign: "justify" }}
            >
              A conference is a formal gathering or meeting of individuals who
              come together to discuss and exchange ideas on a specific topic,
              field, or industry. Conferences can vary in size and scope, from
              small workshops to large international events. They typically
              feature presentations, panel discussions, keynote speeches, and
              networking opportunities.
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: "#ffffff", textAlign: "justify" }}
            >
              <strong style={{fontSize: '18px', marginBottom: '10px'}}>Types of Conferences</strong>
              <ul>
                <li>Academic Conferences</li>
                <li>Industry Conferences</li>
                <li>Professional Conferences</li>
                <li>Workshops</li>
                <li>Symposia</li>
                <li>Seminars</li>
                <li>Webinars</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ color: "#ffffff", textAlign: "justify", marginBottom:'50px' }}
        >
          In summary, Journals are primarily focused on publishing detailed and
          peer-reviewed research articles, whereas conferences focus on
          presenting and discussing recent research findings and fostering
          collaboration among attendees. Journals involve a rigorous peer-review
          process and contain in-depth research articles, while conferences
          offer a more dynamic and interactive environment with shorter papers
          and presentations.
        </Typography>
        
        <JFilter applyFilters={applyFilters} />

        <TableContainer component={Paper} className="table-container">
          <Table className="table">
            <TableHead className="thead">
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>ISSN</TableCell>
                <TableCell>SJR</TableCell>
                <TableCell>SJR Best Quartile</TableCell>
                <TableCell>H Index</TableCell>
                <TableCell>Total Docs (2023)</TableCell>
                <TableCell>Total Docs (3 years)</TableCell>
                <TableCell>Total Refs</TableCell>
                <TableCell>Total Cites (3 years)</TableCell>
                <TableCell>Citable Docs (3 years)</TableCell>
                <TableCell>Cites / Doc (2 years)</TableCell>
                <TableCell>Ref. / Doc</TableCell>
                <TableCell>% Female</TableCell>
                <TableCell>Overton</TableCell>
                <TableCell>SDG</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>Publisher</TableCell>
                <TableCell>Coverage</TableCell>
                <TableCell>Categories</TableCell>
                <TableCell>Areas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tbody">
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    onClick={(e) => handleRowClick(e, row)}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <TableCell>{row.Rank}</TableCell>
                    <TableCell>{row.Title}</TableCell>
                    <TableCell>{row.Type}</TableCell>
                    <TableCell>{row.Issn}</TableCell>
                    <TableCell>{row.SJR}</TableCell>
                    <TableCell>{row["SJR Best Quartile"]}</TableCell>
                    <TableCell>{row["H index"]}</TableCell>
                    <TableCell>{row["Total Docs. (2023)"]}</TableCell>
                    <TableCell>{row["Total Docs. (3years)"]}</TableCell>
                    <TableCell>{row["Total Refs."]}</TableCell>
                    <TableCell>{row["Total Cites (3years)"]}</TableCell>
                    <TableCell>{row["Citable Docs. (3years)"]}</TableCell>
                    <TableCell>{row["Cites / Doc. (2years)"]}</TableCell>
                    <TableCell>{row["Ref. / Doc."]}</TableCell>
                    <TableCell>{row["%Female"]}</TableCell>
                    <TableCell>{row.Overton}</TableCell>
                    <TableCell>{row.SDG}</TableCell>
                    <TableCell>{row.Country}</TableCell>
                    <TableCell>{row.Region}</TableCell>
                    <TableCell>{row.Publisher}</TableCell>
                    <TableCell>{row.Coverage}</TableCell>
                    <TableCell>{row.Categories}</TableCell>
                    <TableCell>{row.Areas}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 75, 100]} 
          component="div"
          count={filteredData.length} 
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ color: "#ffffff" }}
        />

        
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            display: "center",
            horizontal: "center",
          }}
          PaperProps={{
            sx: {
              maxWidth: "75vw",
              maxHeight: "90vh",
              width: "80%", 
              fontSize: "0.2rem", 
              overflow: "auto",
              p: 2,
              backgroundColor: "#bdd5fa",
              color: "#000000",
              boxShadow: "inherit",
              border: "2px solid #4378ec",
              borderRadius: "8px",
            },
          }}
        >
          {selectedRow && (
            <Box>
              <Typography variant="h6" gutterBottom>
                {selectedRow.Title}
              </Typography>
              <Divider sx={{ borderBottom: "1px solid #000000" }} />
              <Grid container spacing={1}>
                <Grid item xs={6} sx={{ marginTop: "10px" }}>
                  <Typography variant="body2">
                    <strong>Rank:</strong> {selectedRow.Rank}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Type:</strong> {selectedRow.Type}
                  </Typography>
                  <Typography variant="body2">
                    <strong>ISSN:</strong> {selectedRow.Issn}
                  </Typography>
                  <Typography variant="body2">
                    <strong>SJR:</strong> {selectedRow.SJR}
                  </Typography>
                  <Typography variant="body2">
                    <strong>SJR Best Quartile:</strong>{" "}
                    {selectedRow["SJR Best Quartile"]}
                  </Typography>
                  <Typography variant="body2">
                    <strong>H Index:</strong> {selectedRow["H index"]}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Total Docs (2023):</strong>{" "}
                    {selectedRow["Total Docs. (2023)"]}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Total Docs (3 years):</strong>{" "}
                    {selectedRow["Total Docs. (3years)"]}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Total Refs:</strong> {selectedRow["Total Refs."]}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Total Cites (3 years):</strong>{" "}
                    {selectedRow["Total Cites (3years)"]}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: "10px" }}>
                  <Typography variant="body2">
                    <strong>Citable Docs (3 years):</strong>{" "}
                    {selectedRow["Citable Docs. (3years)"]}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Cites / Doc (2 years):</strong>{" "}
                    {selectedRow["Cites / Doc. (2years)"]}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Ref. / Doc:</strong> {selectedRow["Ref. / Doc."]}
                  </Typography>
                  <Typography variant="body2">
                    <strong>% Female:</strong> {selectedRow["%Female"]}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Overton:</strong> {selectedRow.Overton}
                  </Typography>
                  <Typography variant="body2">
                    <strong>SDG:</strong> {selectedRow.SDG}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Country:</strong> {selectedRow.Country}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Region:</strong> {selectedRow.Region}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Publisher:</strong> {selectedRow.Publisher}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Coverage:</strong> {selectedRow.Coverage}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Categories:</strong> {selectedRow.Categories}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Areas:</strong> {selectedRow.Areas}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </Popover>
      </Grid>
    </Grid>
  );
}

export default JournalTable;
