import React from "react";
import { Box, styled } from "@mui/material";
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
const Login = () => {
  return (
    <Container>
      <InnerContainer>
        <h3>Login</h3>
        <form>
          <DivBox>
            <Input type="email" placeholder="email" name="email" />
          </DivBox>
          <DivBox>
            <Input type="password" placeholder="password" name="password" />
          </DivBox>
          <DivBox>
            <StyledButton>login</StyledButton>
          </DivBox>
        </form>
      </InnerContainer>
    </Container>
  );
};

export default Login;
