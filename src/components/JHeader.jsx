import { AppBar, Toolbar, Typography } from '@mui/material';

function JHeader() {
  return (
    <AppBar position="static" color="primary" sx = {{marginTop: '1px', backgroundColor: '#111827'}}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, textAlign: 'center'}}>
          Journal Rankings
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default JHeader;
