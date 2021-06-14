const deps = require('../../package.json').dependencies;

module.exports = {
  future: {
    webpack5: true
  },
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;

    config.plugins.push(new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        mfe2: 'mfe2@http://localhost:3002/remoteEntry.js'
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom']
        }
      }
    }));

    return config;
  }
};
