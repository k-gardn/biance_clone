import React from "react";
import Period from "./Period";
import styled from "styled-components";

export default function TradeHistory() {
  return (
    <>
      <Period />
      <STTradeHistoryContainer>
        <span>Date</span>
        <span>Pair</span>
        <span>Side</span>
        <span>Price</span>
        <span>Executed</span>
        <span>Fee</span>
        <span>Role</span>
        <span>Total</span>
        <span className="CancelAll">Cancel All</span>
      </STTradeHistoryContainer>
    </>
  );
}

const STTradeHistoryContainer = styled.div`
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
