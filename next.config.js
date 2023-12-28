/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withVanillaExtract(
  withMDX({
    pageExtensions: ['tsx', 'md', 'mdx'],
    webpack: (config, { isServer }) => {
      if (!isServer) config.resolve.fallback.fs = false;

      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg')
      );

      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: /url/ }, // exclude if *.svg?url
          use: ['@svgr/webpack'],
        }
      );

      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i;

      return config;
    },
  })
);
