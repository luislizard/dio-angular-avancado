const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:4202/",
    uniqueName: "dashboard",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      library: { type: "var", name: "dashboard" },
      filename: "remoteEntry.js",
      exposes: {
        dashboardModule: "./src/app/dashboard/dashboard.module.ts",
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
