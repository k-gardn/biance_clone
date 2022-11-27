import Image from "next/image";
import styled from "styled-components";
import OrderBookList from "./OrderBookList";

export default function Orderbook() {
  return (
    <>
      <STOrderBookContainer>
        <STOrderBookHeader>
          <STOrderBookHeaderTips>
            <span>tap1</span>
            <span>tap2</span>
            <span>tap3</span>
          </STOrderBookHeaderTips>
          <STHeaderRightBox>
            <span>0.1</span>
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
          <span>Amount(BTC)</span>
          <span>Total</span>
        </STHeaderIndex>
        {/* </STHeaderIndexContainer> */}
        <STOrderBookList>
          <OrderBookList />
          <OrderBookList />
        </STOrderBookList>
      </STOrderBookContainer>
    </>
  );
}

const STOrderBookContainer = styled.div`
  /* border: 1px solid blue; */
  padding-top: 20px;
  grid-area: orderbook;
  background-color: white;
  /* min-width: max-content; */
  width: 100%;
  overflow: hidden;
`;

const STOrderBookHeader = styled.div`
  border: 1px solid blue;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  position: relative;
`;

const STOrderBookHeaderTips = styled.div``;

const STHeaderRightBox = styled.div`
  border: 1px solid red;
  position: absolute;
  right: 0;
  & img {
    margin: 0 10px;
  }
`;

const STHeaderIndexContainer = styled.div``;

const STHeaderIndex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  & span {
    color: rgb(112, 122, 138);
    font-size: 12px;
  }
`;

const STOrderBookList = styled.div`
  border: 1px solid red;
`;

const STOrderBookAsk = styled.div``;
const STOrderBookBid = styled.div``;
