import React from "react";
import styled from "styled-components";

export default function Funds() {
  return (
    <STFundsContainer>
      <span>Coin</span>
      <span>Total balance</span>
      <span>Available Balance</span>
      <span>In order</span>
      <span>Debt</span>
      <span>Equity / Equity value (BTC) </span>
      <span>Action</span>
    </STFundsContainer>
  );
}

const STFundsContainer = styled.div`
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
