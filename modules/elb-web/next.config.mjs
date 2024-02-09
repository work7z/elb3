/** @type {import('next').NextConfig} */
let isDev = process.env.NODE_ENV == 'development';
const nextConfig = {
  i18n: {
    locales: ['en-US', 'zh-CN', 'zh-TW'],
    defaultLocale: 'zh-CN',
  },
  domains: [
    {
      domain: !isDev? 'en.elb3.com': 'en.localhost',
      defaultLocale: 'en-US',
    },
    {
      domain: !isDev?'elb3.com' : 'localhost',
      defaultLocale: 'zh-CN',
    },
    {
      domain: !isDev? 'hk.elb3.com' : 'hk.localhost',
      defaultLocale: 'zh-TW',
    },
  ],
};

export default nextConfig;
