const { defineConfig } = require('@vue/cli-service');
const fs = require('fs');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://52.59.125.94:5001',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});