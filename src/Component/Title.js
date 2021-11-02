import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  margin: 25px;
`;

function Title() {
  return (
    <Wrapper>
      <h1>9ijakids Game List</h1>
    </Wrapper>
  );
}

export default Title;
