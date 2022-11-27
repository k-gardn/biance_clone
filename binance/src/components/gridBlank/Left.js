import styled from "styled-components";

export default function left() {
  return <STLeft>left</STLeft>;
}

const STLeft = styled.div`
  border: 1px solid rebeccapurple;
  grid-area: left / left / left / left;
`;
