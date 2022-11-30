import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import axios from "axios";

export default function OrderBookList() {
  const [list, setList] = useState();

  const getList = async () => {
    const data = await axios.get("http://localhost:3001/trades");
    console.log("success", data?.data);
    return data?.data;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["getData"],
    queryFn: getList,
  });
  console.log("data", data);
  //   useEffect(() => {

  // }, []);

  return (
    <STListContainer>
      {data?.map((el) => {
        return (
          <STListBox key={el}>
            <STPrice>{el?.price}</STPrice>
            <STAmount>{el?.amount}</STAmount>
            <STTotal>{el?.total}</STTotal>
          </STListBox>
        );
      })}
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
