import { useRouter } from "next/dist/client/router";
import TopBar from "../src/components/header/TopBar";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import Head from "next/head";

function HomePage({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Add hreflang links */}
        <link rel="alternate" href="http://example.com" hrefLang="x-default" />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
        <link rel="alternate" href="http://example.com/ar" hrefLang="ar" />
        <link rel="alternate" href="http://example.com/fr" hrefLang="fr" />
        <link
          rel="alternate"
          href="http://example.com/nl-NL"
          hrefLang="nl-NL"
        />
      </Head>

      <header>
        <div>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              {locale}
            </Link>
          ))}
        </div>
      </header>

      <main dir={dir}>
        <h1>
          <FormattedMessage
            id="page.home.title"
            values={{ b: (chunks) => <b>{chunks}</b> }}
          />
        </h1>

        <p>
          <FormattedMessage id="page.home.description" />
        </p>
      </main>
    </div>
  );
}
export default HomePage;
