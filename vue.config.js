process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      symlinks: false, // npm link
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/variables/colors.scss";
          @import "@/assets/styles/variables/breakpoints.scss";
        `,
      },
    },
  },
};
