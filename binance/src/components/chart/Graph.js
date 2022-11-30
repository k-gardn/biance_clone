import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Stock } from "@ant-design/plots";

export default function DemoStock() {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("https://jw-binance.herokuapp.com/graph2")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "trade_date",
    yField: ["open", "close", "high", "low"],
    fallingFill: "#ef5350",
    risingFill: "#26a69a",
  };

  return <Stock {...config} />;
}
