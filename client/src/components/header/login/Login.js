import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
const Container = styled(Box)`
  margin: 10%;
  text-align: center;
  width: auto;
  height: auto;
`;
const InnerContainer = styled(Box)`
  width: auto;
  height: auto;
  border-radius: 10px;
`;
const DivBox = styled(Box)`
  padding: 1px;
`;
const Input = styled("input")({
  padding: "4px",
  borderRadius: "5px",
  fontSize: "medium",
});
const StyledButton = styled("button")({
  padding: "4px",
  borderRadius: "5px",
  fontSize: "medium",
  border: "none",
});
const initial = {
  email: "",
  password: "",
};
const Login = ({ setLoginSignUpHandle }) => {
  const [login, setLogin] = useState(initial);
  const inputHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    console.log(login);
    e.preventDefault();
  };
  return (
    <Container>
      <InnerContainer>
        <h3 style={{ color: "white" }}>Login</h3>
        <form onSubmit={submitHandler}>
          <DivBox>
            <Input
              type="email"
              placeholder="email"
              name="email"
              onChange={inputHandler}
            />
          </DivBox>
          <DivBox>
            <Input
              type="password"
              placeholder="password"
              name="password"
              onChange={inputHandler}
            />
          </DivBox>
          <DivBox>
            <StyledButton>log In</StyledButton>
            <Typography style={{ color: "white" }}>
              Don't have an account ? Please{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setLoginSignUpHandle(false);
                }}
              >
                SignUp
              </span>
            </Typography>
          </DivBox>
        </form>
      </InnerContainer>
    </Container>
  );
};

export default Login;
