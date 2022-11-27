/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ["https://img.icons8.com"],
  // },
  i18n: {
    localeDetection: false, // 언어자동감지 - 기본값: true
  },
};

module.exports = nextConfig;
module.exports = {
  i18n,
};
