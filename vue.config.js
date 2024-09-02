const { defineConfig } = require('@vue/cli-service');
const fs = require('fs');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    https: {
      key: fs.readFileSync('./localhost.key'), // Path to your private key
      cert: fs.readFileSync('./localhost.crt'), // Path to your certificate
    },
    port: 8080,  // You can change this port if needed
    host: 'localhost',  // Define the host
  },
});