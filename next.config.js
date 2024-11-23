module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-waw2-2.cdninstagram.com',
        port: '',
        pathname: '/*', // Wildcard to match all paths
      },
    ],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    if (!fileLoaderRule) {
      throw new Error("Could not find the SVG rule in webpack config");
    }

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { 
          not: Array.isArray(fileLoaderRule.resourceQuery?.not)
            ? [...fileLoaderRule.resourceQuery.not, /url/]
            : [/url/]
        },
        use: ['@svgr/webpack'],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
