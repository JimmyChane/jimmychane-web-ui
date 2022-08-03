const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
   transpileDependencies: true,
   // css: {
   //    extract: {
   //       filename: `./css/style.css`,
   //       chunkFilename: `./css/style.chunk.css`,
   //    },
   // },
   // configureWebpack: (config) => {
   //    config.output.filename = `./js/app.js`;
   //    config.output.chunkFilename = `./js/app.chunk.js`;
   // },
});
