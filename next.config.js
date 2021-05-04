const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
//const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");
//const withCss=require('@zeit/next-css')

module.exports = withPlugins([withImages], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  async redirects() {
    return [
      {
        source: '/Profile',
        destination: '/',
        permanent: true,
      },
    ]
  },
  
});
/*module.exports = {
  env: {
      mongodburl: "mongodb+srv://grey:Vermilion9#@cluster0.j4dir.mongodb.net/user?retryWrites=true&w=majority",
  }
};*/
