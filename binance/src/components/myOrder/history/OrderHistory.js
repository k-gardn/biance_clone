import React from "react";
import styled from "styled-components";
import Period from "./Period";

export default function OrderHistory() {
  return (
    <>
      <Period />
      <STIndexBox>
        <span>Order Time</span>
        <span>Pair</span>
        <span>Type</span>
        <span>Side</span>
        <span>Average</span>
        <span>Price</span>
        <span>Executed</span>
        <span>Amount</span>
        <span>Total</span>
        <span>Trigger Conditions</span>
        <span>All</span>
      </STIndexBox>
    </>
  );
}

const STIndexBox = styled.div`
  border-bottom: 1px solid #eef0f2;
  display: flex;
  justify-content: space-around;
  padding: 7px 10px;
  margin: 0 20px;
  & span {
    font-size: 12px;
    color: gray;
  }
`;
