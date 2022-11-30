import { useState } from "react";
import styled from "styled-components";

export default function Period() {
  const [tabIndex, setTabIndex] = useState(0);

  const DayHandler = (e) => {
    e.preventDefault();
    setTabIndex(0);
  };
  const WeekHandler = (e) => {
    e.preventDefault();
    setTabIndex(1);
  };
  const Month1Handler = (e) => {
    e.preventDefault();
    setTabIndex(2);
  };
  const Month3Handler = (e) => {
    e.preventDefault();
    setTabIndex(3);
  };

  const PeriodTab = [
    {
      key: "Day",
      tab: (
        <span className={tabIndex === 0 ? "select" : ""} onClick={DayHandler}>
          1 Day
        </span>
      ),
    },
    {
      key: "Week",
      tab: (
        <span className={tabIndex === 1 ? "select" : ""} onClick={WeekHandler}>
          1 Week
        </span>
      ),
    },
    {
      key: "Month1",
      tab: (
        <span
          className={tabIndex === 2 ? "select" : ""}
          onClick={Month1Handler}
        >
          1 Month
        </span>
      ),
    },
    {
      key: "Month",
      tab: (
        <span
          className={tabIndex === 3 ? "select" : ""}
          onClick={Month3Handler}
        >
          3 Month
        </span>
      ),
    },
  ];

  return (
    <STPeriodContainer>
      <STPeriod>
        {PeriodTab.map((item) => {
          return <span key={item.key}>{item.tab}</span>;
        })}
      </STPeriod>
      <div>
        <span>Time</span>
        <span>YYYY-MM-DD</span>
        <span>to</span>
        <span>YYYY-MM-DD</span>
      </div>
      <STSearch>Search</STSearch>
      <STReset>Reset</STReset>
    </STPeriodContainer>
  );
}

const STPeriodContainer = styled.div`
  display: flex;
  padding: 5px 20px;
  & span {
    font-size: 12px;
    color: rgb(112, 122, 138);
    margin-right: 20px;
  }
`;

const STPeriod = styled.div`
  cursor: pointer;
  & span {
    margin-right: 15px;
    &.select {
      background-color: #eaecef;
      padding: 4px;
      color: black;
      font-weight: 500;
    }
  }
`;

const STSearch = styled.button`
  background-color: white;
  border: transparent;
  margin-right: 10px;
  padding: 5px;
  cursor: pointer;
`;

const STReset = styled.button`
  background-color: #eaecef;
  border-color: transparent;
  cursor: pointer;
  color: gray;
  :hover {
    background-color: #d5d9dd;
  }
`;
