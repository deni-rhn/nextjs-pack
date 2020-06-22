const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

const nextConfig = {
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    config.resolve.modules.unshift(__dirname);

    return config;
  },
  target: 'serverless',
};

module.exports = withSass(withCSS(nextConfig));
