import { useState } from "react";
import styled from "styled-components";
import OpenOrder from "./OpenOrders";
import OrderHistory from "./history/OrderHistory";
import TradeHistory from "./history/TradeHistory";
import Funds from "./Funds";
import Positions from "./Positions";

export default function MyOrder() {
  const [tabIndex, setTabIndex] = useState(0);

  const commonList = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return <OpenOrder />;
      case 1:
        return <OrderHistory />;
      case 2:
        return <TradeHistory />;
      case 3:
        return <Funds />;
      case 4:
        return <Positions />;
      default:
        return;
    }
  };

  const OpenOrdersHandler = (e) => {
    e.preventDefault();
    setTabIndex(0);
  };
  const OrderHistoryHandler = (e) => {
    e.preventDefault();
    setTabIndex(1);
  };
  const TradeHistoryHandler = (e) => {
    e.preventDefault();
    setTabIndex(2);
  };
  const FundsHandler = (e) => {
    e.preventDefault();
    setTabIndex(3);
  };
  const PositionsHandler = (e) => {
    e.preventDefault();
    setTabIndex(4);
  };

  const HeaderTab = [
    {
      key: "OpenOrders",
      tab: (
        <STTabName
          className={tabIndex === 0 ? "select" : ""}
          onClick={OpenOrdersHandler}
        >
          Open Orders(0)
        </STTabName>
      ),
    },
    {
      key: "OrderHistory",
      tab: (
        <STTabName
          className={tabIndex === 1 ? "select" : ""}
          onClick={OrderHistoryHandler}
        >
          Order History
        </STTabName>
      ),
    },
    {
      key: "TradeHistory",
      tab: (
        <STTabName
          className={tabIndex === 2 ? "select" : ""}
          onClick={TradeHistoryHandler}
        >
          Trade History
        </STTabName>
      ),
    },
    {
      key: "Funds",
      tab: (
        <STTabName
          className={tabIndex === 3 ? "select" : ""}
          onClick={FundsHandler}
        >
          Funds
        </STTabName>
      ),
    },
    {
      key: "Positions",
      tab: (
        <STTabName
          className={tabIndex === 4 ? "select" : ""}
          onClick={PositionsHandler}
        >
          Positions(0)
        </STTabName>
      ),
    },
  ];

  return (
    <STMyOrderContainer>
      <STMyOrderHeader>
        {HeaderTab.map((item) => {
          return <span key={item.key}>{item.tab}</span>;
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
  /* border: 1px solid red; */
  padding: 13px;
`;

const StyleContent = styled.div``;

const STTabName = styled.span`
  /* border: 1px solid red; */
  margin-right: 30px;
  font-size: 15px;
  cursor: pointer;
  color: gray;
  &.select {
    color: #cb9a1b;
  }
`;
