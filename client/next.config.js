module.exports = {
  // for avoiding compiling issue, just in case
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};
