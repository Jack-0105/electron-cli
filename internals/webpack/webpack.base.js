const path = require("path");

const buildModules = function (externalModule) {
  let rules = [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
    {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve("babel-loader"),
            },
          ],
        },
      ],
    },
  ];

  if (externalModule && externalModule.rules) {
    rules = rules.concat(externalModule.rules);
  }

  return {
    rules,
  };
};

const buildPlugins = function (externalPlugins) {
  const plugins = [];
  return plugins.concat(externalPlugins);
};

module.exports = (options) => ({
  mode: options.mode || "production",
  entry: options.entry,
  output: Object.assign(
    {
      path: "/",
      globalObject: "this",
    },
    options.output
  ),
  module: buildModules(options.module),
  plugins: buildPlugins(options.plugins || []),
  externals: options.externals || {},
  devtool: options.devtool,
  target: options.target,
  node: options.node || {},
  resolve: options.resolve,
});
