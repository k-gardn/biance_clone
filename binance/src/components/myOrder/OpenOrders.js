import React from "react";
import styled from "styled-components";

export default function OpenOrders() {
  return (
    <STOpenOrdersContainer>
      <span>Date</span>
      <span>Pair</span>
      <span>Type</span>
      <span>Side</span>
      <span>Price</span>
      <span>Amount</span>
      <span>Filled</span>
      <span>Total</span>
      <span>TiggerConditions</span>
      <span className="CancelAll">Cancel All</span>
    </STOpenOrdersContainer>
  );
}

const STOpenOrdersContainer = styled.div`
  border-bottom: 1px solid #eef0f2;
  display: flex;
  justify-content: space-between;
  padding: 7px 10px;
  margin: 0 20px;
  & span {
    font-size: 12px;
    color: gray;
  }
  .CancelAll {
    color: #cb9a1b;
  }
`;
