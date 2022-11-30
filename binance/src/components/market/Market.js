import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import MarketName from "./MarketName";

export default function Market() {
  const [submitData, setSubmitData] = useState("");

  return (
    <STMarketContainer>
      <STSearchBox>
        <Image
          className="search"
          width={20}
          src={require("../../../src/images/search.png")}
          alt="search"
        />
        <StyledMobileSearchInput
          type="text"
          placeholder="Search"
          maxLength={35}
          onChange={(e) => setSubmitData(e.target.value)}
        />
      </STSearchBox>
      <MarketName />
    </STMarketContainer>
  );
}

const STMarketContainer = styled.div`
  /* border: 1px solid red; */
  grid-area: market;
  background-color: #fafafa;
  padding: 30px 15px 20px 15px;
`;

const STSearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f3f5;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
`;

const StyledMobileSearchInput = styled.input`
  border: transparent;
  color: #b7bdc6;
  background-color: transparent;
`;
