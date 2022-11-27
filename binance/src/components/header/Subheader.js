import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Subheader() {
  return (
    <>
      <STSubHeaderContainer>
        <STTitle>
          <span>BTC/BUSD</span>
          <STPriceLinkBox>
            <Image
              className="BTCPrice"
              width={15}
              src={require("../../../src/images/bitcoin_price.png")}
              alt="BTCPrice"
            />
            <Link href={"/bitcoinPrice"}>
              <STPriceLink>Bitcoin Price</STPriceLink>
            </Link>
          </STPriceLinkBox>
        </STTitle>
        <STPriceBox>
          <STNowPrice>
            <STShowPrice>16,539.43</STShowPrice>
            <STSubPrice>$16,544.95</STSubPrice>
          </STNowPrice>
          <ST24hPrice>
            <STPriceTitle>24h Change</STPriceTitle>
            <STPriceChange>
              <span>-21.48</span>
              <span>-0.12%</span>
            </STPriceChange>
          </ST24hPrice>
          <ST24hPrice>
            <STPriceTitle>24h High</STPriceTitle>
            <span>16,544.95</span>
          </ST24hPrice>
          <ST24hPrice>
            <STPriceTitle>24h Low</STPriceTitle>
            <span>16,544.95</span>
          </ST24hPrice>
          <ST24hPrice>
            <STPriceTitle>24h Volume(BTC)</STPriceTitle>
            <span>16,544.95</span>
          </ST24hPrice>
          <ST24hPrice>
            <STPriceTitle>24h Volume(BUSD)</STPriceTitle>
            <span>1,371,697,644.43</span>
          </ST24hPrice>
        </STPriceBox>
        <STGuide>
          <STTutorialBox>
            <Image
              className="Tutorial"
              width={15}
              src={require("../../../src/images/tutorial.png")}
              alt="Tutorial"
            />
            <span>Spot Tutorial</span>
          </STTutorialBox>
          <STTutorialBox>
            <Image
              className="Guidance"
              width={15}
              src={require("../../../src/images/guidebook.png")}
              alt="Guidance"
            />
            <span>Spot Guidance</span>
          </STTutorialBox>
        </STGuide>
      </STSubHeaderContainer>
    </>
  );
}

const STSubHeaderContainer = styled.div`
  /* border: 1px solid purple; */
  background-color: white;
  grid-area: subHeader;
  display: flex;
  align-items: center;
  position: relative;
`;

const STTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  padding-right: 30px;
  border-right: 1px solid rgb(238, 240, 242);
  & span {
    margin-bottom: 5px;
  }
`;

const STPriceLinkBox = styled.div`
  display: flex;
`;

const STPriceLink = styled.div`
  font-size: 12px;
  color: rgb(112, 122, 138);
  cursor: pointer;
`;

const STPriceBox = styled.div`
  display: flex;
`;

const STNowPrice = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const STShowPrice = styled.span`
  color: red;
`;

const STSubPrice = styled.span`
  font-size: 12px;
`;

const ST24hPrice = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  font-size: 12px;
`;

const STPriceTitle = styled.span`
  color: rgb(112, 122, 138);
  margin-bottom: 3px;
`;

const STPriceChange = styled.span`
  color: green;
`;

const STGuide = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  & span {
    color: rgb(112, 122, 138);
    font-size: 12px;
    cursor: pointer;
  }
`;

const STTutorialBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;
