import React from "react";
import styled from "styled-components";

export default function Market() {
  return <STMarketContainer>Market</STMarketContainer>;
}

const STMarketContainer = styled.div`
  border: 1px solid red;
  grid-area: market / market / market / market;
`;
