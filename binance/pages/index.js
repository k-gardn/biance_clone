import { useRouter } from "next/dist/client/router";
import TopBar from "../src/components/header/TopBar";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import Head from "next/head";
import nextI18NextConfig from "../next-i18next.config.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, null, nextI18NextConfig)),
  },
});
function HomePage() {
  return <div>HomePage</div>;
}
export default HomePage;
