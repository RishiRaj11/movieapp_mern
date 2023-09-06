import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import LoginDialog from "./LoginDialog";

const Wapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
`;
const LoginButton = styled(Button)`
  color: rgb(29, 69, 107);
  background: #ffffff;
  text-transform: none;
  padding: 5px 15px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);

  const dialogHandler = () => {
    setOpen(true);
  };
  return (
    <Wapper>
      <LoginButton style={{ marginRight: "10px" }} onClick={dialogHandler}>
        Admin User
      </LoginButton>
      <LoginButton onClick={dialogHandler}>Normal User</LoginButton>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wapper>
  );
};

export default CustomButton;
