/* config-overrides.js */

module.exports = function override(config, env) {
  config.output = {
    ...config.output, // copy all settings
    splitChunks: {
      cacheGroups: {
        default: false,
      },
    },
    runtimeChunk: false
  };
  return config;
};
