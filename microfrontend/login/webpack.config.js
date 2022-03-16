const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "login",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "login",
      library: { type: "var", name: "login" },
      filename: "remoteEntry.js",
      exposes: {
        loginModule: "./src/app/login/login.module.ts",
       },
      shared: {
        "@angular/core": {
          singleton: true,
          eager: true,
          strictVersion: true,
          requiredVersion: deps["@angular/core"],
        },
        "@angular/common": {
          singleton: true,
          eager: true,
          strictVersion: true,
          requiredVersion: deps["@angular/common"],
        },
        "@angular/router": {
          singleton: true,
          eager: true,
          strictVersion: true,
          requiredVersion: deps["@angular/router"],
        },
      },
    }),
  ],
};
