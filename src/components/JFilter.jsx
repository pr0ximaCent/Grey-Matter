import React, { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';

function JFilter({ applyFilters }) {
  const [subjectArea, setSubjectArea] = useState('All');
  const [subjectCategory, setSubjectCategory] = useState('All');
  const [region, setRegion] = useState('All');
  const [type, setType] = useState('All');
  const [sdg, setSdg] = useState('All'); // Assuming SDG is a new filter

  const handleApplyFilters = () => {
    const filters = {
      Areas: subjectArea,
      Categories: subjectCategory,
      Region: region,
      Type: type,
      SDG: sdg
    };

    applyFilters(filters);
  };

  return (
    <Box p={2} sx = {{marginTop: '30px', marginBottom: '20px'}}>
      <Grid container spacing={2} justifyContent="center">
        {/* First Row */}
        <Grid item xs={8} sm={2}>
          <FormControl fullWidth variant="outlined" size="small" sx={{ minWidth: 120 }}>
            <InputLabel sx={{ color: '#ffffff', fontSize: '1.1rem' }}>Subject Area</InputLabel>
            <Select
              label="Subject Area"
              value={subjectArea}
              onChange={(e) => setSubjectArea(e.target.value)}
              sx={{
                backgroundColor: '#111827',
                color: '#ffffff',
                border: '1px solid black',
                
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ffffff',
                  },
                },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Medicine">Medicine</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8} sm={2}>
          <FormControl fullWidth variant="outlined" size="small" sx={{ minWidth: 120 }}>
            <InputLabel sx={{ color: '#ffffff', fontSize: '1.1rem' }}>Subject Category</InputLabel>
            <Select
              label="Subject Category"
              value={subjectCategory}
              onChange={(e) => setSubjectCategory(e.target.value)}
              sx={{
                backgroundColor: '#111827',
                color: '#ffffff',
                border: '1px solid black',
          
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1976d2', // Blue outline color for Subject Category
                  },
                },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Hematology (Q1); Oncology (Q1)">Hematology (Q1); Oncology (Q1)</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8} sm={2}>
          <FormControl fullWidth variant="outlined" size="small" sx={{ minWidth: 120 }}>
            <InputLabel sx={{ color: '#ffffff', fontSize: '1.1rem' }}>Region</InputLabel>
            <Select
              label="Region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              sx={{
                backgroundColor: '#111827',
                color: '#ffffff',
                border: '1px solid black',
                
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ffffff', // Default outline color
                  },
                },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Northern America">Northern America</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>
        {/* Second Row */}
        <Grid item xs={8} sm={2}>
          <FormControl fullWidth variant="outlined" size="small" sx={{ minWidth: 120 }}>
            <InputLabel sx={{ color: '#ffffff', fontSize: '1.1rem' }}>Type</InputLabel>
            <Select
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              sx={{
                backgroundColor: '#111827',
                color: '#ffffff',
                border: '1px solid black',
                
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ffffff', // Default outline color
                  },
                },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="journal">Journal</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8} sm={2}>
          <FormControl fullWidth variant="outlined" size="small" sx={{ minWidth: 120 }}>
            <InputLabel sx={{ color: '#ffffff', fontSize: '1.1rem' }}>SDG</InputLabel>
            <Select
              label="SDG"
              value={sdg}
              onChange={(e) => setSdg(e.target.value)}
              sx={{
                backgroundColor: '#111827',
                color: '#ffffff',
                border: '1px solid black',
                
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ffffff', // Default outline color
                  },
                },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="35">35</MenuItem> {/* Example SDG values */}
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>
        {/* Third Row for Apply Button */}
        <Grid item xs={8} container justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleApplyFilters}
            size="large" // Adjust size as needed
            sx={{ backgroundColor: '#4378ec', color: '#ffffff', textTransform: 'Capitalize', '&:hover': { backgroundColor: '#4398ec' } }}
          >
            Apply
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default JFilter;
