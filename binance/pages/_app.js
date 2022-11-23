import "../styles/globals.css";
import { Provider } from "mobx-react";
import Store from "../src/mobx/modules/store";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      {/* <Provider Store={Store}> */}
      <Component {...pageProps} />
      {/* </Provider> */}
    </RecoilRoot>
  );
}

export default MyApp;
