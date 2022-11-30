//domain.com/en/trade/[cryptoName]

import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { nameState } from "../../src/atoms/states";
import { Triangle } from "../../src/common/triangle";
import { ArrowHead } from "../../src/common/arrow";
import Orderbook from "../../src/components/orderbook/Orderbook";
import Chart from "../../src/components/chart/Chart";
import Subheader from "../../src/components/header/Subheader";
import OrderForm from "../../src/components/orderform/OrderForm";
import Trades from "../../src/components/trades/Trades";
import Market from "../../src/components/market/Market";
import MarketActivity from "../../src/components/marketActivity/MarketActivity";
import MyOrder from "../../src/components/myOrder/MyOrder";
import Left from "../../src/components/gridBlank/Left";
import Right from "../../src/components/gridBlank/Right";
export default function Cryptos() {
  const router = useRouter();
  console.log(router);
  const cryptos = router.query.cryptos; //param 같은 것
  console.log(cryptos);
  const [testInput, setTestInput] = useRecoilState(nameState);

  const updateTest = (e) => {
    setTestInput(e.target.value);
  };
  return (
    <>
      <Left />
      <Subheader />
      <Orderbook />
      <Chart />
      <OrderForm />
      <Market />
      <Trades />
      <MarketActivity />
      <MyOrder />
      <Right />
    </>
  );
}
