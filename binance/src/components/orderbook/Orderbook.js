import styled from "styled-components";

export default function Orderbook() {
  return (
    <>
      <STOrderBookContainer>Orderbook</STOrderBookContainer>
    </>
  );
}

const STOrderBookContainer = styled.div`
  border: 1px solid blue;
  grid-area: orderbook / orderbook / orderbook / orderbook;
`;
