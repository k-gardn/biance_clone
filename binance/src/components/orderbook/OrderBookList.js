import styled from "styled-components";

export default function OrderBookList() {
  const dummyData = [
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
    { price: 16567.63, amount: 0.04324, total: 39.34435 },
  ];
  console.log(dummyData);
  return (
    <STListContainer>
      {dummyData.map((el) => {
        return (
          <STListBox key={el}>
            <STPrice>{el.price}</STPrice>
            <STAmount>{el?.amount}</STAmount>
            <STTotal>{el?.total}</STTotal>
          </STListBox>
        );
      })}
    </STListContainer>
  );
}

const STListContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
const STListBox = styled.div`
  display: flex;
  width: 320px;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 0 10px;
`;

const STPrice = styled.span`
  font-size: 12px;
`;

const STAmount = styled.span`
  font-size: 12px;
`;
const STTotal = styled.span`
  font-size: 12px;
`;
