import Image from "next/image";
import styled from "styled-components";
import OrderBookList from "./OrderBookList";
import { useState, useEffect } from "react";
import { useQuery, useQueries } from "react-query";
import axios from "axios";

export default function Orderbook() {
  const [tabIndex, setTabIndex] = useState(0);

  const orderbookList = async () => {
    const data = await axios.get("https://jw-binance.herokuapp.com/orderbook");
    console.log("success", data.data.data);
    return data;
  };
  const sellList = async () => {
    const data = await axios.get("https://jw-binance.herokuapp.com/sell");
    console.log("success", data);
    return data;
  };
  const buyList = async () => {
    const data = await axios.get("https://jw-binance.herokuapp.com/buy");
    console.log("success", data);
    return data;
  };

  const result = useQueries([
    {
      queryKey: ["getOrderbook"],
      queryFn: orderbookList,
    },
    {
      queryKey: ["getSell"],
      queryFn: sellList,
    },
    {
      queryKey: ["getBuy"],
      queryFn: buyList,
    },
  ]);

  useEffect(() => {
    console.log("result", result); // [{rune 정보, data: [], isSucces: true ...}, {spell 정보, data: [], isSucces: true ...}]
    // console.log("첫번째", result[0]?.data?.data);
    // console.log("두번째", result[1]?.data?.data);
    // console.log("세번째", result[2]?.data?.data);
    const loadingFinishAll = result.some((result) => result.isLoading);
    console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
  }, [result]);

  const orderbook = result[0]?.data?.data;
  const sell = result[1]?.data?.data;
  const buy = result[2]?.data?.data;

  console.log("첫번째", orderbook);
  console.log("두번째", sell);
  console.log("세번째", buy);

  const commonList = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return <OrderBookList props={orderbook} index={tabIndex} />;
      case 1:
        return <OrderBookList props={sell} index={tabIndex} />;
      case 2:
        return <OrderBookList props={buy} index={tabIndex} />;
      default:
        return;
    }
  };

  const OrderbookHandler = (e) => {
    e.preventDefault();
    setTabIndex(0);
  };
  const SellHandler = (e) => {
    e.preventDefault();
    setTabIndex(1);
  };
  const BuyHandler = (e) => {
    e.preventDefault();
    setTabIndex(2);
  };

  return (
    <>
      <STOrderBookContainer>
        <STOrderBookHeader>
          <STOrderBookHeaderTips>
            <STOrderBook
              className={tabIndex === 0 ? "select" : ""}
              onClick={OrderbookHandler}
            >
              Orderbook
            </STOrderBook>
            <STSell
              className={tabIndex === 1 ? "select" : ""}
              onClick={SellHandler}
            >
              Sell Order
            </STSell>
            <STBuy
              className={tabIndex === 2 ? "select" : ""}
              onClick={BuyHandler}
            >
              Buy Order
            </STBuy>
          </STOrderBookHeaderTips>
          <STHeaderRightBox>
            {/* <span>0.1</span> */}
            <Image
              className="dot3"
              width={20}
              src={require("../../../src/images/display_dot_grey.png")}
              alt="Tutorial"
            />
          </STHeaderRightBox>
        </STOrderBookHeader>
        {/* <STHeaderIndexContainer> */}
        <STHeaderIndex>
          <span>Price(BUSD)</span>
          <STAmount>Amount(BTC)</STAmount>
          <span>Total</span>
        </STHeaderIndex>
        {/* </STHeaderIndexContainer> */}
        <STOrderBookList>
          {commonList(tabIndex)}
          {/* <OrderBookList /> */}
          <OrderBookList />
        </STOrderBookList>
      </STOrderBookContainer>
    </>
  );
}

const STOrderBookContainer = styled.div`
  /* border: 1px solid red; */
  padding-top: 20px;
  grid-area: orderbook;
  background-color: #fafafa;
  /* min-width: max-content; */
  width: 100%;
  overflow: hidden;
`;

const STOrderBookHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  position: relative;
`;

const STOrderBookHeaderTips = styled.div`
  margin-bottom: 10px;
  & span {
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
    &.select {
      color: #cb9a1b;
    }
  }
`;
const STOrderBook = styled.span``;
const STSell = styled.span``;
const STBuy = styled.span``;

const STHeaderRightBox = styled.div`
  position: absolute;
  right: 0;
  & img {
    margin: 0 10px;
  }
`;

const STHeaderIndexContainer = styled.div``;

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
const STAmount = styled.span`
  position: absolute;
  left: 37%;
`;

const STOrderBookList = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid blue; */
`;
