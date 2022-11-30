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
          <STAmount>Amount(BTC)</STAmount>
          <span>Total</span>
        </STHeaderIndex>
        {/* </STHeaderIndexContainer> */}
        <STOrderBookList>
          <OrderBookList />
          <STPriceBox>
            <STNowPrice>
              <STShowPrice>16,539.43</STShowPrice>
              <STSubPrice>$16,544.95</STSubPrice>
            </STNowPrice>
            <STPriceMore>More</STPriceMore>
          </STPriceBox>
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

const STOrderBookHeaderTips = styled.div``;

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

const STPriceBox = styled.div`
  display: flex;
  height: 33px;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

const STNowPrice = styled.div`
  display: flex;
  align-items: center;
  /* margin: 0 20px; */
`;

const STPriceMore = styled.span`
  color: rgb(112, 122, 138);
  font-size: 12px;
`;

const STShowPrice = styled.span`
  font-size: 20px;
  color: red;
  /* margin-right: 10px; */
  margin: 10px 10px 15px 0;
`;

const STSubPrice = styled.span`
  font-size: 12px;
`;
const STOrderBookAsk = styled.div``;
const STOrderBookBid = styled.div``;
