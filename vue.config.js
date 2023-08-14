module.exports = {
  transpileDependencies: true,
  publicPath: "./",
  productionSourceMap: false,

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Jimmy Chane";
      return args;
    });
  },
};
