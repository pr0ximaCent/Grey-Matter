import "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function JHeader() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          Journal Rankings
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default JHeader;
