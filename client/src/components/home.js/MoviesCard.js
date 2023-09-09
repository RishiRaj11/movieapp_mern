import React from "react";
import { Card, Box, styled, Typography } from "@mui/material";

const StyledCard = styled(Card)`
  width: 200px;
  height: auto;
  margin: 20px;
`;
const Text = styled(Typography)`
  font-size: 14px;
`;

const Image = styled("img")({
  width: "auto",
  height: 150,
});
const MoviesCard = ({ item }) => {
  console.log(item);
  return (
    <StyledCard>
      <Box
        textAlign="center"
        style={{ padding: "25px 15px", marginButton: "10px" }}
      >
        <Image src={item.posterurl} />
        <Box>
          <Text style={{ fontWeight: 600 }}>{item.title}</Text>
          <Text>Release Date:{item.releaseDate}</Text>
          <Text></Text>
          <Text>Rating:{item.contentRating}</Text>
          <Text>Year:{item.year}</Text>
        </Box>
      </Box>
    </StyledCard>
  );
};

export default MoviesCard;
