import "react";
import { Box, Typography, Link, Grid } from "@mui/material";

function JFooter() {
  return (
    <Box mt={5} p={3} bgcolor="#47597c">
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" align="center" color="white">
            &copy; 2024 Journal Rankings
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Link href="#" color="inherit" underline="hover" sx={{ mr: 2, color: 'white' }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ mr: 2, color: 'white' }}>
              Terms of Service
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ color: 'white' }}>
              Contact Us
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default JFooter;
