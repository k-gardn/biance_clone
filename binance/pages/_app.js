import "../styles/globals.css";
import { Provider } from "mobx-react";
import Store from "../src/mobx/modules/store";
import { RecoilRoot } from "recoil";
import { Layout } from "../src/components/layout/Layout";
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import { useRouter } from "next/dist/client/router";

const messages = {
  en,
};
function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </IntlProvider>
  );
}

export default MyApp;
