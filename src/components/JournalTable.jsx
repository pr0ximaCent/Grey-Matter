import  {useEffect, useState} from "react";
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Popover,
    Typography,
    Divider,
    Box,
} from "@mui/material";
import "../JournalTable.css";
import JFilter from "./JFilter";
import constant_data from "../constants.js"; // Import JFilter component

function JournalTable() {
    // eslint-disable-next-line no-unused-vars
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [selectedRow, setSelectedRow] = useState(null); // Track selected row for popover
    const [anchorEl, setAnchorEl] = useState(null); // Anchor element for popover positioning
    const [filters, setFilters] = useState({
        subjectArea: "All",
        subjectCategory: "All",
        region: "All",
        type: "All",
        searchQuery: "",
    });

    // Function to apply filters from JFilter component
    const applyFilters = () => {
       fetchJournalData(1);
    };

    // const handleChangePage = (event, newPage) => {
    //     console.log(newPage);
    //     setStartIndex(newPage);
    //     setSelectedRow(null); // Reset selected row when changing page
    // };
    //
    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setStartIndex(0);
    //     setSelectedRow(null); // Reset selected row when changing rows per page
    // };

    const handleRowClick = (event, row) => {
        setSelectedRow(row);
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setSelectedRow(null);
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    const [filteredData, setFilteredData] = useState([]); // State to hold filtered data
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false);
    const [startIndex, setStartIndex] = useState(1);



    const fetchJournalData = async (index_number) => {
        setLoading(true);
        setStartIndex(index_number);
        console.log(JSON.stringify({
            start_index: index_number,
            end_index: index_number + rowsPerPage - 1,
            title: filters.searchQuery,
            areas : filters.subjectArea,
            categories  : filters.subjectCategory,
            region  : filters.region,
            type    : filters.type,
        }));
        if(filters.type==="All"){filters.type="";}
        if(filters.region==="All"){filters.region="";}
        if(filters.subjectArea==="All"){filters.subjectArea="";}
        if(filters.subjectCategory==="All"){filters.subjectCategory="";}

        const response = await fetch(`${constant_data.backend_url}/search_journal_data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                start_index: index_number,
                end_index: index_number + rowsPerPage - 1,
                title: filters.searchQuery,
                areas : filters.subjectArea,
                categories  : filters.subjectCategory,
                region  : filters.region,
                type    : filters.type,
            }),
        });
        const data = await response.json();
        console.log(data);
        setFilteredData(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchJournalData(startIndex);
    }, []);
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={10} lg={8}>

                {/* Information about Journals and Conferences */}
                <Grid container spacing={3} sx={{marginTop: "20px"}}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom sx={{color: "#ffffff"}}>
                            Journal Information
                        </Typography>
                        <Typography
                            variant="body1"
                            gutterBottom
                            sx={{color: "#ffffff", textAlign: "justify"}}
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
                            sx={{color: "#ffffff", textAlign: "justify"}}
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
                        <Typography variant="h6" gutterBottom sx={{color: "#ffffff"}}>
                            Conference Information
                        </Typography>
                        <Typography
                            variant="body1"
                            gutterBottom
                            sx={{color: "#ffffff", textAlign: "justify"}}
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
                            sx={{color: "#ffffff", textAlign: "justify"}}
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
                    sx={{color: "#ffffff", textAlign: "justify", marginBottom: '50px'}}
                >
                    In summary, Journals are primarily focused on publishing detailed and
                    peer-reviewed research articles, whereas conferences focus on
                    presenting and discussing recent research findings and fostering
                    collaboration among attendees. Journals involve a rigorous peer-review
                    process and contain in-depth research articles, while conferences
                    offer a more dynamic and interactive environment with shorter papers
                    and presentations.
                </Typography>
                {/* Integrate JFilter component */}
                <JFilter applyFilters={applyFilters} setFilters={setFilters} filters={filters}/>

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
                            {filteredData.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        onClick={(e) => handleRowClick(e, row)}
                                        className={index % 2 === 0 ? "even-row" : "odd-row"}
                                    >
                                        <TableCell>{row.rank}</TableCell>
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell>{row.type}</TableCell>
                                        <TableCell>{row.issn}</TableCell>
                                        <TableCell>{row.sjr}</TableCell>
                                        <TableCell>{row.sjrBestQuartile}</TableCell>
                                        <TableCell>{row.hIndex}</TableCell>
                                        <TableCell>{row.totalDocs2023}</TableCell>
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
                <div className="flex flex-col items-center">
              <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing <span className="font-semibold text-gray-900 dark:text-white">{startIndex}</span> to <span
                  className="font-semibold text-gray-900 dark:text-white">{startIndex + rowsPerPage - 1}</span>
  </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                        <button
                            onClick={() => fetchJournalData(startIndex - rowsPerPage)}
                            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M13 5H1m0 0 4 4M1 5l4-4"/>
                            </svg>
                            Prev
                        </button>
                        <button
                            onClick={() => fetchJournalData(startIndex + rowsPerPage)}
                            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Next
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Popover for detailed view */}
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
                            width: "80%", // Adjust card width as needed
                            fontSize: "0.2rem", // Adjust font size for content
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
                                {selectedRow.title}
                            </Typography>
                            <Divider sx={{borderBottom: "1px solid #000000"}}/>
                            <Grid container spacing={1}>
                                <Grid item xs={6} sx={{marginTop: "10px"}}>
                                    <Typography variant="body2">
                                        <strong>Rank:</strong> {selectedRow.rank}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Type:</strong> {selectedRow.type}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>ISSN:</strong> {selectedRow.issn}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>SJR:</strong> {selectedRow.sjr}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>SJR Best Quartile:</strong>{" "}
                                        {selectedRow.sjrBestQuartile}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>H Index:</strong> {selectedRow.hIndex}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Total Docs (2023):</strong>{" "}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Total Docs (3 years):</strong>{" "}
                                        {selectedRow.totalDocs2023}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Total Refs:</strong> {selectedRow.totalRefs}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Total Cites (3 years):</strong>{" "}
                                        {selectedRow.totalCites3Years}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sx={{marginTop: "10px"}}>
                                    <Typography variant="body2">
                                        <strong>Citable Docs (3 years):</strong>{" "}
                                        {selectedRow.citableDocs3Years}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Cites / Doc (2 years):</strong>{" "}
                                        {selectedRow.citesPerDoc2Years}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Ref. / Doc:</strong> {selectedRow.refsPerDoc}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>% Female:</strong> {selectedRow.percentFemale}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Overton:</strong> {selectedRow.overton}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>SDG:</strong> {selectedRow.sdg}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Country:</strong> {selectedRow.country}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Region:</strong> {selectedRow.region}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Publisher:</strong> {selectedRow.publisher}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Coverage:</strong> {selectedRow.coverage}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Categories:</strong> {selectedRow.categories}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Areas:</strong> {selectedRow.areas}
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
