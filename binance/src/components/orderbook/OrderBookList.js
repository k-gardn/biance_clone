import React from "react";
import styled from "styled-components";
import OrderBookItem from "./OrderBookItem";

export default function OrderBookList(props) {
  const list = props.props;
  const index = props.index;
  console.log("list", list);
  console.log("index", index);

  const nowPrice = (index) => {
    return (
      <STPriceBox>
        <STNowPrice>
          <STShowPrice>16,539.43</STShowPrice>
          <STSubPrice>$16,544.95</STSubPrice>
        </STNowPrice>
        <STPriceMore>More</STPriceMore>
      </STPriceBox>
    );
  };
  return (
    <>
      {index === 1 ? nowPrice(index) : null}

      <StyledListContainer>
        {list?.map((item) => {
          return <OrderBookItem item={item} key={item.id} index={index} />;
        })}
      </StyledListContainer>
      {index === 2 ? nowPrice(index) : null}
    </>
  );
}

const StyledListContainer = styled.div`
  /* border: 1px solid blue; */
  /* margin-top: 20px; */
  /* margin-bottom: 80px; */
  animation: fadein 0.8s;
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
