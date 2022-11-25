/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ["https://img.icons8.com"],
  // },
  i18n: {
    // The locales you want to support in your app
    locales: ["ar", "en", "fr", "nl-NL"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
  },
  // assetPrefix: ".",
};

module.exports = nextConfig;
