import React from "react";
import styled from "styled-components";

export const ArrowHead = ({ length, onClick, buttonName }) => {
  return <STArrow length={length} onClick={onClick}></STArrow>;
};

const STArrow = styled.div`
  width: 15px;
  height: 15px;
  border: solid;
  color: gray;
  border-width: 1.5px 0 0 1.5px; /* top right bottom left */

  transform: rotate(225deg);
  position: absolute;
`;
