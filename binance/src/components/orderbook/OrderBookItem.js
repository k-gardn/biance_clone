import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

export default function OrderBookItem(props) {
  const [item, setItem] = useState([]);
  console.log(props);
  const list = props.item;
  const index = props.index;

  useEffect(() => {
    setItem(list);
  }, []);
  console.log("item", item);

  return (
    <STListContainer>
      <STListBox>
        <STPrice>{list?.price}</STPrice>
        <STAmount>{list?.amount}</STAmount>
        <STTotal>{list?.total}</STTotal>
      </STListBox>
    </STListContainer>
  );
}

const STListContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
`;
const STListBox = styled.div`
  display: flex;
  position: relative;
  width: 320px;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 0 10px;
`;

const STPrice = styled.span`
  width: 20%;
  font-size: 12px;
  text-align: right;
`;

const STAmount = styled.span`
  font-size: 12px;
  text-align: right;
  width: 20%;
  position: absolute;
  left: 40%;
`;
const STTotal = styled.span`
  text-align: right;

  font-size: 12px;
  width: 30%;
  position: absolute;
  right: 15px;
`;
