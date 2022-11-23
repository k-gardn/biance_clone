//domain.com/en/trade/[cryptoName]

import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { nameState } from "../../../src/atoms/states";

export default function Cryptos() {
  const router = useRouter();
  const cryptos = router.query.cryptos; //param 같은 것

  const [testInput, setTestInput] = useRecoilState(nameState);

  const updateTest = (e) => {
    setTestInput(e.target.value);
  };
  return (
    <>
      <h1>Test</h1>

      <div>{testInput}</div>
      <br />
      <input
        type="text"
        name="testInput"
        id="testId"
        onChange={updateTest}
        placeholder="되고픈걸 쓰게"
      />
      <br />

      <Link href="/">Back to main</Link>
    </>
  );
}
