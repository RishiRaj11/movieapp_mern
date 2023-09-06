import React from "react";
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const SearchIconWapper = styled(Box)`
  color: gray;
  padding-right: 5px;
  padding-top: 4px;
`;

const InputBox = styled(InputBase)`
  width: 100%;
  margin-left: 20px;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputBox placeholder="Search..." />
      <SearchIconWapper>
        <SearchIcon />
      </SearchIconWapper>
    </SearchContainer>
  );
};

export default Search;
