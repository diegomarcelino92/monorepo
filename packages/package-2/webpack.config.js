const { ModuleFederationPlugin } = require('webpack').container;

const webpackDefault = require('../../webpack.config');
const deps = require('../../package.json');

webpackDefault.plugins.push(
  new ModuleFederationPlugin({
    name: 'mfe2',
    filename: 'remoteEntry.js',
    exposes: {
      './app': './src/app',
    },
    shared: {
      react: {
        eager: true,
        singleton: true,
        requiredVersion: deps.react,
      },
      'react-dom': {
        eager: true,
        singleton: true,
        requiredVersion: deps['react-dom'],
      },
    },
  })
);

module.exports = webpackDefault;
