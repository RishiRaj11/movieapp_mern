import React, { useEffect } from "react";
import MoviesCard from "./MoviesCard";
import { useDispatch, useSelector } from "react-redux";
import { movieAPI } from "../redux/features/movieSlice";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;
const MoviesList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(movieAPI());
  }, [dispatch]);
  return (
    <Container>
      {state.movieReducer.payload.map((item) => (
        <MoviesCard key={item._id} item={item} />
      ))}
    </Container>
  );
};

export default MoviesList;
