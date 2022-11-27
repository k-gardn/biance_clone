import styled from "styled-components";

export default function right() {
  return <STRightContainer>right</STRightContainer>;
}

const STRightContainer = styled.div`
  border: 1px solid blue;
  grid-area: right / right / right / right;
`;
