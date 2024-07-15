import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  TextField,
} from "@mui/material";

function JFilter({ applyFilters }) {
  const [filters, setFilters] = useState({
    subjectArea: "All",
    subjectCategory: "All",
    region: "All",
    type: "All",
    sdg: "All",
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleApplyFilters = () => {
    applyFilters({ ...filters, searchQuery });
  };

  const handleResetFilters = () => {
    setFilters({
      subjectArea: "All",
      subjectCategory: "All",
      region: "All",
      type: "All",
      sdg: "All",
    });
    setSearchQuery("");
    applyFilters({
      subjectArea: "All",
      subjectCategory: "All",
      region: "All",
      type: "All",
      sdg: "All",
      searchQuery: "",
    });
  };

  return (
    <Box p={2} sx={{ marginTop: "30px", marginBottom: "20px" }}>
      <Grid container spacing={3} justifyContent="center">
        {/* Subject Area */}
        <Grid item xs={12} sm={6} md={3}>
          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            sx={{ minWidth: 120 }}
          >
            <InputLabel sx={{ color: "#ffffff", fontSize: "1.1rem" }}>
              Subject Area
            </InputLabel>
            <Select
              label="Subject Area"
              value={filters.subjectArea}
              onChange={(e) =>
                setFilters({ ...filters, subjectArea: e.target.value })
              }
              sx={{
                backgroundColor: "#111827",
                color: "#ffffff",
                border: "1px solid black",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffffff",
                  },
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: '#111833',
                    '& .MuiMenuItem-root': {
                      color: '#ffffff', // Set the text color of menu items
                    },
                  },
                },
              }}
  
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Medicine">Medicine</MenuItem>
              <MenuItem value="Physics and Astronomy">
                Physics and Astronomy
              </MenuItem>
              <MenuItem value="Biochemistry, Genetics and Molecular Biology">
                Biochemistry, Genetics and Molecular Biology
              </MenuItem>
              <MenuItem value="Energy; Materials Science">
                Energy; Materials Science
              </MenuItem>
              <MenuItem value="Business, Management and Accounting; Economics, Econometrics and Finance">
                Business, Management and Accounting; Economics, Econometrics and
                Finance
              </MenuItem>
              <MenuItem value="Economics, Econometrics and Finance">
                Economics, Econometrics and Finance
              </MenuItem>
              <MenuItem value="Chemistry">Chemistry</MenuItem>
              <MenuItem value="Biochemistry, Genetics and Molecular Biology; Chemical Engineering; Engineering; Immunology and Microbiology">
                Biochemistry, Genetics and Molecular Biology; Chemical
                Engineering; Engineering; Immunology and Microbiology
              </MenuItem>
              <MenuItem value="Multidisciplinary">Multidisciplinary</MenuItem>
              <MenuItem value="Medicine; Pharmacology, Toxicology and Pharmaceutics">
                Medicine; Pharmacology, Toxicology and Pharmaceutics
              </MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>

        {/* Subject Category */}
        <Grid item xs={12} sm={6} md={3}>
          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            sx={{ minWidth: 120 }}
          >
            <InputLabel sx={{ color: "#ffffff", fontSize: "1.1rem" }}>
              Subject Category
            </InputLabel>
            <Select
              label="Subject Category"
              value={filters.subjectCategory}
              onChange={(e) =>
                setFilters({ ...filters, subjectCategory: e.target.value })
              }
              sx={{
                backgroundColor: "#111827",
                color: "#ffffff",
                border: "1px solid black",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffffff",
                  },
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: '#111833',
                    '& .MuiMenuItem-root': {
                      color: '#ffffff', // Set the text color of menu items
                    },
                  },
                },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Hematology (Q1); Oncology (Q1)">
                Hematology (Q1); Oncology (Q1)
              </MenuItem>
              <MenuItem value="Artificial Intelligence (Q1); Human-Computer Interaction (Q1); Software (Q1)">
                Artificial Intelligence (Q1); Human-Computer Interaction (Q1);
                Software (Q1)
              </MenuItem>
              <MenuItem value="Cell Biology (Q1); Molecular Biology (Q1)">
                Cell Biology (Q1); Molecular Biology (Q1)
              </MenuItem>
              <MenuItem value="Economics and Econometrics (Q1)">
                Economics and Econometrics (Q1)
              </MenuItem>
              <MenuItem value="Biochemistry, Genetics and Molecular Biology (miscellaneous) (Q1)">
                Biochemistry, Genetics and Molecular Biology (miscellaneous)
                (Q1)
              </MenuItem>
              <MenuItem value="Cancer Research (Q1); Oncology (Q1)">
                Cancer Research (Q1); Oncology (Q1)
              </MenuItem>
              <MenuItem value="Drug Discovery (Q1); Medicine (miscellaneous) (Q1); Pharmacology (Q1)">
                Drug Discovery (Q1); Medicine (miscellaneous) (Q1); Pharmacology
                (Q1)
              </MenuItem>
              <MenuItem value="Biomaterials (Q1); Electronic, Optical and Magnetic Materials (Q1); Energy (miscellaneous) (Q1); Materials Chemistry (Q1); Surfaces, Coatings and Films (Q1)">
                Biomaterials (Q1); Electronic, Optical and Magnetic Materials
                (Q1); Energy (miscellaneous) (Q1); Materials Chemistry (Q1);
                Surfaces, Coatings and Films (Q1)
              </MenuItem>
              <MenuItem value="Medicine (miscellaneous) (Q1)">
                Medicine (miscellaneous) (Q1)
              </MenuItem>
              <MenuItem value="Biochemistry (Q1); Medicine (miscellaneous) (Q1); Structural Biology (Q1)">
                Biochemistry (Q1); Medicine (miscellaneous) (Q1); Structural
                Biology (Q1)
              </MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>

        {/* Region */}
        <Grid item xs={12} sm={6} md={3}>
          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            sx={{ minWidth: 120 }}
          >
            <InputLabel sx={{ color: "#ffffff", fontSize: "1.1rem" }}>
              Region
            </InputLabel>
            <Select
              label="Region"
              value={filters.region}
              onChange={(e) =>
                setFilters({ ...filters, region: e.target.value })
              }
              sx={{
                backgroundColor: "#111827",
                color: "#ffffff",
                border: "1px solid black",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffffff",
                  },
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: '#111833',
                    '& .MuiMenuItem-root': {
                      color: '#ffffff', // Set the text color of menu items
                    },
                  },
                },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Asiatic Region">Asiatic Region</MenuItem>
              <MenuItem value="Northern America">Northern America</MenuItem>
              <MenuItem value="Southern America">Southern America</MenuItem>
              <MenuItem value="Eastern Europe">Eastern Europe</MenuItem>
              <MenuItem value="Western Europe">Western Europe</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>

        {/* Type */}
        <Grid item xs={12} sm={6} md={3}>
          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            sx={{ minWidth: 120 }}
          >
            <InputLabel sx={{ color: "#ffffff", fontSize: "1.1rem" }}>
              Type
            </InputLabel>
            <Select
              label="Type"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              sx={{
                backgroundColor: "#111827",
                color: "#ffffff",
                border: "1px solid black",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffffff",
                  },
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: '#111833',
                    '& .MuiMenuItem-root': {
                      color: '#ffffff', // Set the text color of menu items
                    },
                  },
                },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="journal">Journal</MenuItem>
              <MenuItem value="conference">Conference</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>

        {/* SDG */}
        <Grid item xs={12} sm={6} md={3}>
          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            sx={{ minWidth: 120 }}
          >
            <InputLabel sx={{ color: "#ffffff", fontSize: "1.1rem" }}>
              SDG
            </InputLabel>
            <Select
              label="SDG"
              value={filters.sdg}
              onChange={(e) => setFilters({ ...filters, sdg: e.target.value })}
              sx={{
                backgroundColor: "#111827",
                color: "#ffffff",
                border: "1px solid black",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffffff",
                  },
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: '#111833',
                    '& .MuiMenuItem-root': {
                      color: '#ffffff',
                    },
                  },
                },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="35">35</MenuItem>
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="20">20</MenuItem>
              <MenuItem value="22">22</MenuItem>
              <MenuItem value="59">59</MenuItem>
              <MenuItem value="42">42</MenuItem>
              <MenuItem value="17">17</MenuItem>
              <MenuItem value="60">60</MenuItem>
              <MenuItem value="46">46</MenuItem>
              <MenuItem value="22">22</MenuItem>
              <MenuItem value="130">130</MenuItem>
              <MenuItem value="21">21</MenuItem>
              <MenuItem value="37">37</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Search Bar */}
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          sx={{ marginTop: "10px" }}
        >
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              minWidth: "100%",
              backgroundColor: "#111827",
              color: "#ffffff",
              "& .MuiInputLabel-root": {
                color: "#ffffff",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ffffff",
                },
                "&:hover fieldset": {
                  borderColor: "#ffffff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ffffff",
                },
                "& input": {
                  color: "#ffffff",
                },
              },
            }}
          />
        </Grid>

        {/* Apply and Reset Buttons */}
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          sx={{ marginTop: "10px" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleApplyFilters}
            size="large"
            sx={{
              backgroundColor: "#4378ec",
              color: "#ffffff",
              textTransform: "Capitalize",
              "&:hover": { backgroundColor: "#4398ec" },
            }}
          >
            Apply
          </Button>
          <Button
            variant="contained"
            onClick={handleResetFilters}
            size="large"
            sx={{
              marginLeft: "10px",
              backgroundColor: "#f44336",
              color: "#ffffff",
              textTransform: "Capitalize",
              "&:hover": { backgroundColor: "#f44336" },
            }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default JFilter;
