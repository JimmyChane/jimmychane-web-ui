const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: "./",
	productionSourceMap: false,

	chainWebpack: (config) => {
		config.plugin("html").tap((args) => {
			args[0].title = "Jimmy Fox";
			return args;
		});
	},
});
