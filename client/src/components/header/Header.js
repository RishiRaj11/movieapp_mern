import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import CustomButton from "./CustomButton";
import Search from "./Search";
const Header = () => {
  return (
    <AppBar style={{ background: "rgb(29,69,107)" }}>
      <Toolbar>
        <Box style={{ display: "flex" }}>
          <TheatersIcon />
          <Typography variant="h5">Movie App</Typography>
        </Box>
        <Search />
        <CustomButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
