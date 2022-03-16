const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "shell",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      library: { type: "var", name: "shell" },
      filename: "remoteEntry.js",
      // exposes: {
      //    Can expose anything: modules, state etc...
      // },
      remotes: {
        login: 'login@http://localhost:4201/remoteEntry.js}',
        dashboard: 'dashboard@http://localhost:4202/remoteEntry.js}'
      },
      shared: {
        "@angular/core": { singleton: true, eager: true, strictVersion: true, requiredVersion: deps["@angular/core"]},
        "@angular/common": { singleton: true, eager: true, strictVersion: true, requiredVersion: deps["@angular/common"] },
        "@angular/router": { singleton: true, eager: true, strictVersion: true, requiredVersion: deps["@angular/router"] },
        // You can build this list automatically
      },
    }),
  ],
};
