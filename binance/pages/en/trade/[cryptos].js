//domain.com/en/trade/[cryptoName]

import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Cryptos() {
  const router = useRouter();
  const cryptos = router.query.cryptos; //param 같은 것

  const [test, setTest] = useState();
  return <div>Cryptos</div>;
}
