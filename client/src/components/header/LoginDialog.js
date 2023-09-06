import React from "react";
import { Dialog, Card } from "@mui/material";
import Login from "./login/Login";
const LoginDialog = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Card variant="outlined" style={{ backgroundColor: "rgb(29,69,107)" }}>
        <Login />
      </Card>
    </Dialog>
  );
};

export default LoginDialog;
