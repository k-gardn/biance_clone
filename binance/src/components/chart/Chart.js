import styled from "styled-components";

export default function Chart() {
  return (
    <>
      <STChartContainer>Chart</STChartContainer>
    </>
  );
}

const STChartContainer = styled.div`
  border: 1px solid red;
  grid-area: chart / chart / chart / chart;
`;
