import React from "react";
import { Box, styled } from "@mui/material";
import MoviesList from "./MoviesList";

const Conatiner = styled(Box)`
  margin-top: 75px;
`;

const Home = () => {
  return (
    <Conatiner>
      <MoviesList />
    </Conatiner>
  );
};

export default Home;
