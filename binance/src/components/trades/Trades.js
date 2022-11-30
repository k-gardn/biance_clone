import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import OrderBookList from "../orderbook/OrderBookList";

export default function Trades() {
  const [tabIndex, setTabIndex] = useState(0);

  const orderbookList = async () => {
    const data = await axios.get("https://jw-binance.herokuapp.com/orderbook");
    console.log("success", data.data.data);
    return data;
  };

  const result = useQuery([
    {
      queryKey: ["getOrderbook"],
      queryFn: orderbookList,
    },
  ]);

  const orderbook = result[0]?.data?.data;

  const MarketHandler = (e) => {
    e.preventDefault();
    setTabIndex(0);
  };
  const MyHandler = (e) => {
    e.preventDefault();
    setTabIndex(1);
  };

  const HeaderTab = [
    {
      key: "Market",
      tab: (
        <span
          className={tabIndex === 0 ? "select" : ""}
          onClick={MarketHandler}
        >
          Market Trades
        </span>
      ),
    },
    {
      key: "Mine",
      tab: (
        <span className={tabIndex === 1 ? "select" : ""} onClick={MyHandler}>
          My Trades
        </span>
      ),
    },
  ];

  const beforeLogin = () => {
    return <STMyTrades>Log In or Register Now to trade</STMyTrades>;
  };

  console.log(tabIndex);
  return (
    <STTradesContainer>
      <STTradesHeader>
        <STTradesHeaderTitle>
          {HeaderTab.map((item) => {
            return <span key={item.key}>{item.tab}</span>;
          })}
        </STTradesHeaderTitle>
      </STTradesHeader>
      <STHeaderIndex>
        <span>Price(BUSD)</span>
        <STAmount>Amount(BTC)</STAmount>
        <span>Times</span>
      </STHeaderIndex>
      <STListBox>
        {tabIndex === 0 ? (
          <OrderBookList props={orderbook} index={tabIndex} />
        ) : (
          beforeLogin()
        )}
      </STListBox>
    </STTradesContainer>
  );
}

const STTradesContainer = styled.div`
  /* border: 1px solid blue; */
  grid-area: trades;
  background-color: white;
  /* min-width: max-content; */
  width: 100%;
  overflow: hidden;
`;

const STTradesHeader = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  padding: 15px 10px;
`;
const STTradesHeaderTitle = styled.div`
  cursor: pointer;
  & span {
    font-size: 15px;
    margin-right: 15px;
    &.select {
      color: #cb9a1b;
    }
  }
`;

const STHeaderIndex = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 5px 10px;
  width: 310px;
  & span {
    color: rgb(112, 122, 138);
    font-size: 12px;
  }
`;

const STListBox = styled.div`
  display: flex;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

const STAmount = styled.span`
  position: absolute;
  left: 37%;
`;

const STMyTrades = styled.div``;
