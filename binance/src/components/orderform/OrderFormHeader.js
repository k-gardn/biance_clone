import styled from "styled-components";
import { useState } from "react";
import Spot from "./Spot";
import Cross from "./Cross";
import Isolated from "./Isolated";

export default function OrderFormHeader() {
  const [tabIndex, setTabIndex] = useState(0);

  const SpotHandler = (e) => {
    e.preventDefault();
    setTabIndex(0);
  };
  const CrossHandler = (e) => {
    e.preventDefault();
    setTabIndex(1);
  };
  const IsolatedHandler = (e) => {
    e.preventDefault();
    setTabIndex(2);
  };

  const HeaderTab = [
    {
      key: "Spot",
      tab: (
        <STHeaderTab
          onClick={SpotHandler}
          className={tabIndex === 0 ? "select" : ""}
        >
          <STTabTitle>Spot</STTabTitle>
        </STHeaderTab>
      ),
      content: <Spot />,
    },
    {
      key: "Cross",
      tab: (
        <STHeaderTab
          onClick={CrossHandler}
          className={tabIndex === 1 ? "select" : ""}
        >
          <STTabTitle>Cross</STTabTitle>
          <STX className={tabIndex === 1 ? "x" : ""}> 3x</STX>
        </STHeaderTab>
      ),
      content: <Cross />,
    },
    {
      key: "Isolated",
      tab: (
        <STHeaderTab
          onClick={IsolatedHandler}
          className={tabIndex === 2 ? "select" : ""}
        >
          <STTabTitle>Isolated</STTabTitle>
          <STX className={tabIndex === 2 ? "x" : ""}> 10x</STX>
        </STHeaderTab>
      ),
      content: <Isolated />,
    },
  ];

  return (
    <STHeaderContainer>
      <STHeader>
        {HeaderTab.map((item) => {
          return <STTabBox key={item.key}>{item.tab}</STTabBox>;
        })}
      </STHeader>
      {HeaderTab[tabIndex].content}
    </STHeaderContainer>
  );
}

const STHeaderContainer = styled.div`
  grid-area: orderform;
  background-color: white;
`;

const STHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  height: 55px;
`;

const STTabBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 100%;
`;

const STHeaderTab = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: #707a8a;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #eaecef;
  &.select {
    height: 100%;
    color: black;
    border-top: 2px solid #f0b909;
    border-bottom: transparent;
    border-right: 1px solid #eaecef;
    border-left: 1px solid #eaecef;
    background-color: white;
  }
`;

const STTabTitle = styled.span``;

const STX = styled.span`
  color: #707a8a;
  cursor: pointer;
  &.x {
    color: #c99400;
  }
`;
