import "../styles/globals.css";
import { Provider } from "mobx-react";
import Store from "../src/mobx/modules/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider Store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
