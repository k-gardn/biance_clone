import "../styles/globals.css";
import Store from "../src/mobx/modules/store";
import { RecoilRoot } from "recoil";
import { Layout } from "../src/components/layout/Layout";
import { useRouter } from "next/dist/client/router";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const { locale, locales, defaultLocale } = useRouter();
  console.log(locale);
  console.log(locales);
  console.log(defaultLocale);
  const queryClient = new QueryClient(); // Instance of QueryClient

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
