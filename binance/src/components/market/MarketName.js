import { useState } from "react";
import styled from "styled-components";
import CommonList from "./CommonList";
import Image from "next/image";

export default function MarketName() {
  const [tabIndex, setTabIndex] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const commonList = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return <CommonList />;
      case 1:
        return <CommonList />;
      case 2:
        return <CommonList />;
      case 3:
        return <CommonList />;
      case 4:
        return <CommonList />;
      default:
        return;
    }
  };

  const MarginHandler = (e) => {
    e.preventDefault();
    setTabIndex(0);
  };
  const BUSDHandler = (e) => {
    e.preventDefault();
    setTabIndex(1);
  };
  const USDTHandler = (e) => {
    e.preventDefault();
    setTabIndex(2);
  };
  const BNBHandler = (e) => {
    e.preventDefault();
    setTabIndex(3);
  };
  const BTCHandler = (e) => {
    e.preventDefault();
    setTabIndex(4);
  };
  const ALTSHandler = (e) => {
    e.preventDefault();
    setTabIndex(4);
  };

  const HeaderTab = [
    {
      key: "star",
      tab: (
        <>
          <STTabName className="fullstar" onClick={() => setIsLike(true)}>
            {isLike ? (
              <Image
                className="menu"
                width={15}
                src={require("../../../src/images/fullstar.png")}
                alt="fullstar"
              />
            ) : (
              <Image
                className="blankstar"
                width={15}
                src={require("../../../src/images/blankstar.png")}
                alt="blankstar"
              />
            )}
          </STTabName>
        </>
      ),
    },
    {
      key: "Margin",
      tab: (
        <STTabName
          className={tabIndex === 1 ? "select" : ""}
          onClick={MarginHandler}
        >
          Margin
        </STTabName>
      ),
    },
    {
      key: "BUSD",
      tab: (
        <STTabName
          className={tabIndex === 2 ? "select" : ""}
          onClick={BUSDHandler}
        >
          BUSD
        </STTabName>
      ),
    },
    {
      key: "USDT",
      tab: (
        <STTabName
          className={tabIndex === 3 ? "select" : ""}
          onClick={USDTHandler}
        >
          USDT
        </STTabName>
      ),
    },
    {
      key: "BNB",
      tab: (
        <STTabName
          className={tabIndex === 4 ? "select" : ""}
          onClick={BNBHandler}
        >
          BNB
        </STTabName>
      ),
    },
    {
      key: "BTC",
      tab: (
        <STTabName
          className={tabIndex === 5 ? "select" : ""}
          onClick={BTCHandler}
        >
          BTC
        </STTabName>
      ),
    },
    {
      key: "ALTS",
      tab: (
        <STTabName
          className={tabIndex === 6 ? "select" : ""}
          onClick={ALTSHandler}
        >
          ALTS
        </STTabName>
      ),
    },
  ];

  return (
    <STMyOrderContainer>
      <STMyOrderHeader>
        {HeaderTab.map((item) => {
          return <STTabNameBox key={item.key}>{item.tab}</STTabNameBox>;
        })}
      </STMyOrderHeader>
      <StyleContent>{commonList(tabIndex)}</StyleContent>
    </STMyOrderContainer>
  );
}

const STMyOrderContainer = styled.div`
  /* border: 1px solid red; */
  grid-area: basictable;
  background-color: #fafafa;
`;

const STMyOrderHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px;
`;

const STTabNameBox = styled.span`
  &.star {
    position: absolute;
    left: 0;
    top: 30px;
    margin-right: 10px;
  }
`;
const STToggleBox = styled.div``;
const StyleContent = styled.div``;

const STTabName = styled.span`
  width: max-content;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  color: gray;
  &.select {
    color: #cb9a1b;
  }
`;
