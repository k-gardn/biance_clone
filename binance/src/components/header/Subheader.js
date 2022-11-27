import React from "react";
import styled from "styled-components";

export default function Subheader() {
  return (
    <>
      <STSubHeaderContainer>Subheader</STSubHeaderContainer>
    </>
  );
}

const STSubHeaderContainer = styled.div`
  border: 1px solid purple;
  grid-area: subHeader / subHeader / subHeader / subHeader;
`;
