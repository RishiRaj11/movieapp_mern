import React, { useState } from "react";
import { Dialog, Card } from "@mui/material";
import Login from "./login/Login";
import SignUp from "./login/SingUp";
const LoginDialog = ({ open, setOpen }) => {
  const [loginSignUpHandle, setLoginSignUpHandle] = useState(true);
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Card variant="outlined" style={{ backgroundColor: "rgb(29,69,107)" }}>
        {loginSignUpHandle ? (
          <Login setLoginSignUpHandle={setLoginSignUpHandle} />
        ) : (
          <SignUp setLoginSignUpHandle={setLoginSignUpHandle} />
        )}
        {/**/}
      </Card>
    </Dialog>
  );
};

export default LoginDialog;
