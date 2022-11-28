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

  //   16167.73 0.20000 3,233.54600
  // 16167.72 0.34803 5,626.85159
  // 16167.71 0.03000 485.03130
  // 16167.70 0.12799 2,069.30392
  // 16167.69 0.00093 15.03595
  // 16167.68 0.00600 97.00608
  // 16167.59 0.00600 97.00554
  // 16167.43 0.01605 259.48725
  // 16167.14 0.01300 210.17282
  // 16167.13 0.03216 519.93490
  // 16167.05 0.09898 1,600.21461
  // 16167.04 0.35541 5,745.92769
  // 16167.02 0.02656 429.39605
  // 16166.97 0.00540 87.30164
  // 16166.88 0.00600 97.00128
  // 16166.86 0.16314 2,637.46154
  // 16166.85 0.01856 300.05674

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
