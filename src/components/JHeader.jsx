import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function JHeader() {
  return (
    <AppBar position="static" color="primary" sx = {{backgroundColor: '#4378ec', marginTop: '120px'}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center'}}>
          Journal Rankings
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default JHeader;
