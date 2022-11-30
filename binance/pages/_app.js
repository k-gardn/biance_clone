import "../styles/globals.css";
import Store from "../src/mobx/modules/store";
import { RecoilRoot } from "recoil";
import { Layout } from "../src/components/layout/Layout";
import { useRouter } from "next/dist/client/router";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const { locale, locales, defaultLocale } = useRouter();
  console.log(locale);
  console.log(locales);
  console.log(defaultLocale);

  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default appWithTranslation(MyApp);
