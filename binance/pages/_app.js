import "../styles/globals.css";
import { Provider } from "mobx-react";
import Store from "../src/mobx/modules/store";
import { RecoilRoot } from "recoil";
import { Layout } from "../src/components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
