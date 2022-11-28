import React from "react";
import styled from "styled-components";

export default function Period() {
  // const HeaderTab = [
  //   {
  //     key: "Market",
  //     tab: (
  //       <span
  //         className={tabIndex === 0 ? "select" : ""}
  //         onClick={MarketHandler}
  //       >
  //         Market Trades
  //       </span>
  //     ),
  //   },
  //   {
  //     key: "Mine",
  //     tab: (
  //       <span className={tabIndex === 1 ? "select" : ""} onClick={MyHandler}>
  //         My Trades
  //       </span>
  //     ),
  //   },
  // ];

  return (
    <STPeriodContainer>
      <STPeriod>
        <span>1 Day</span>
        <span>1 Week</span>
        <span>1 Month</span>
        <span>3 Month</span>
      </STPeriod>
      <div>
        <span>Time</span>
        <span>YYYY-MM-DD</span>
        <span>to</span>
        <span>YYYY-MM-DD</span>
      </div>
      <STSearch>Search</STSearch>
      <STReset>Reset</STReset>
    </STPeriodContainer>
  );
}

const STPeriodContainer = styled.div`
  display: flex;
  padding: 5px 20px;
  & span {
    font-size: 12px;
    color: rgb(112, 122, 138);
    margin-right: 20px;
  }
`;

const STPeriod = styled.div``;

const STSearch = styled.button`
  background-color: white;
  border: transparent;
  margin-right: 10px;
`;

const STReset = styled.button`
  background-color: #eaecef;
  border-color: transparent;
`;
