import React from "react";
import styled from "styled-components";

export default function Positions() {
  return (
    <STPositionContainer>
      <span>Coin</span>
      <span>Position</span>
      <span>Position value(USDT)</span>
      <span>Index Price(USDT)</span>
      <span>Liquidation Price(USDT)</span>
      <span>To Liquidation Price</span>
    </STPositionContainer>
  );
}

const STPositionContainer = styled.div`
  border-bottom: 1px solid #eef0f2;
  display: flex;
  justify-content: space-between;
  padding: 7px 10px;
  margin: 0 20px;
  & span {
    font-size: 12px;
    color: gray;
  }
`;
