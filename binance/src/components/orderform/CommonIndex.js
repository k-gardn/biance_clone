import styled from "styled-components";
import { useState } from "react";
export default function CommonIndex() {
  const [tabIndex, setTabIndex] = useState(0);

  const NormalHandler = (e) => {
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
      key: "Normal",
      tab: (
        <STHeaderTab
          onClick={NormalHandler}
          className={tabIndex === 0 ? "select" : ""}
        >
          <STTabTitle>Limit</STTabTitle>
        </STHeaderTab>
      ),
      // content: <Spot />,
    },
    {
      key: "Market",
      tab: (
        <STHeaderTab
          onClick={CrossHandler}
          className={tabIndex === 1 ? "select" : ""}
        >
          <STTabTitle>Market</STTabTitle>
        </STHeaderTab>
      ),
      // content: <Cross />,
    },
    {
      key: "limit",
      tab: (
        <STHeaderTab
          onClick={IsolatedHandler}
          className={tabIndex === 2 ? "select" : ""}
        >
          <STTabTitle>Stop-limit</STTabTitle>
        </STHeaderTab>
      ),
      // content: <Isolated />,
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
  background-color: white;
  height: 50px;
  padding-left: 15px;
`;

const STTabBox = styled.span`
  display: flex;
  width: 70px;
`;
const STHeaderTab = styled.span`
  font-size: 15px;
  cursor: pointer;
  color: gray;
  &.select {
    color: #cb9a1b;
  }
`;

const STTabTitle = styled.span``;
