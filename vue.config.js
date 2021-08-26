module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sleep-research/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/_fonts.scss";',
      },
    },
  },
};
