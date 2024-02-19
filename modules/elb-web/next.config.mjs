/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["sequelize", "sequelize-typescript"],
  },
  // compiler: {
  //   styledComponents: true,
  // },
  // domains: [
  //   {
  //     domain: !isDev? 'en.elb3.com': 'en.localhost',
  //     defaultLocale: 'en-US',
  //   },
  //   {
  //     domain: !isDev?'elb3.com' : 'localhost',
  //     defaultLocale: 'zh-CN',
  //   },
  //   {
  //     domain: !isDev? 'hk.elb3.com' : 'hk.localhost',
  //     defaultLocale: 'zh-TW',
  //   },
  // ],
};

export default nextConfig;
