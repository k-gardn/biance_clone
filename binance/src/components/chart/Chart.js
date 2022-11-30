import styled from "styled-components";
import Graph from "../chart/Graph";

export default function Chart() {
  return (
    <>
      <STChartContainer>
        <STChartHeader>
          <STLeftBox>
            <span>Time</span>
            <span>1s</span>
            <span>15m</span>
            <span>1H</span>
            <span>4H</span>
            <span>1D</span>
            <span>1W</span>
          </STLeftBox>
          <STRightBox>
            <span>Original</span>
            <span>Trading View</span>
            <span>Depth</span>
          </STRightBox>
        </STChartHeader>
        <STGraphBox>
          <Graph />
        </STGraphBox>
        <STMarginTrading>
          <STMarginTradingLeftBox>
            <span className="steps">Margin trading steps:</span>
            <span className="Collaterals">Transfer Collaterals</span>
            <span>{">"}</span>
            <span className="Borrow">Borrow/Trade</span>
            <span>{">"}</span>
            <span className="Repay">Repay/Trade</span>
          </STMarginTradingLeftBox>
          <STMarginTradingRighttBox>Tutorial video</STMarginTradingRighttBox>
        </STMarginTrading>
      </STChartContainer>
    </>
  );
}

const STChartContainer = styled.div`
  grid-area: chart;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const STChartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 20px;
`;
const STLeftBox = styled.div`
  display: flex;
  & span {
    font-size: 12px;
    color: gray;
    margin-right: 10px;
  }
`;
const STRightBox = styled.div`
  display: flex;
  & span {
    font-size: 12px;
    color: gray;
    margin-right: 10px;
  }
`;

const STGraphBox = styled.div`
  width: 100%;
  height: 100%;
`;

const STMarginTrading = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px;
`;

const STMarginTradingLeftBox = styled.span`
  & span {
    font-size: 12px;
  }
  .steps {
    font-weight: 500;
  }
  .Collaterals {
    color: #c99400;
  }
`;

const STMarginTradingRighttBox = styled.span`
  font-size: 12px;
  font-weight: 500;
`;
