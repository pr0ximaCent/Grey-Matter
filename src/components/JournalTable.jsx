import { useState } from 'react';
import {
  Grid, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, TablePagination, Popover, Typography, Divider, Box
} from '@mui/material';
import '../JournalTable.css';



function JournalTable({data, fetchJournalData}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [selectedRow, setSelectedRow] = useState(null); // Track selected row for popover
  const [anchorEl, setAnchorEl] = useState(null); // Anchor element for popover positioning

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setSelectedRow(null); // Reset selected row when changing page
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setSelectedRow(null); // Reset selected row when changing rows per page
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
    console.log(data)
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={10} lg={8}>
        <TableContainer component={Paper} className="table-container">
          <Table className='table'>
            <TableHead className='thead'>
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
            <TableBody className='tbody'>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  onClick={(e) => handleRowClick(e, row)}
                  className={index % 2 === 0 ? 'even-row' : 'odd-row'}
                >
                  <TableCell>{row.rank}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.issn}</TableCell>
                  <TableCell>{row.sjr}</TableCell>
                  <TableCell>{row.sjrBestQuartile}</TableCell>
                  <TableCell>{row.hIndex}</TableCell>
                  <TableCell>{row.totalDocs2023}</TableCell>
                  <TableCell>{row.totalDocs3Years}</TableCell>
                  <TableCell>{row.totalRefs}</TableCell>
                  <TableCell>{row.totalCites3Years}</TableCell>
                  <TableCell>{row.citableDocs3Years}</TableCell>
                  <TableCell>{row.citesPerDoc2Years}</TableCell>
                  <TableCell>{row.refsPerDoc}</TableCell>
                  <TableCell>{row.percentFemale}</TableCell>
                  <TableCell>{row.overton}</TableCell>
                  <TableCell>{row.sdg}</TableCell>
                  <TableCell>{row.country}</TableCell>
                  <TableCell>{row.region}</TableCell>
                  <TableCell>{row.publisher}</TableCell>
                  <TableCell>{row.coverage}</TableCell>
                  <TableCell>{row.categories}</TableCell>
                  <TableCell>{row.areas}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 75, 100]} // Customize rows per page options
          component="div"
          count={data.length} // Total number of rows
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ color: '#ffffff' }} 
        />

      </Grid>
    </Grid>
  );
}

export default JournalTable;
