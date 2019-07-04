const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

const plugins = [];
const opts = process.argv.slice(2);

let defaultConfig = {
  entry: {
    'util': './src/index.js'
  },
  output: {
    libraryTarget: 'umd',//umd
    // umdNamedDefine: true,
    // globalObject: 'this',//必须得有它
    path: path.resolve(__dirname, 'dist'),
    // filename: 'Q.js'
    library: 'XXX'
  },
  // externals: {
  //   bluebird: "bluebird"
  // },
  plugins: plugins
};

let config = {};
if (!opts.includes('production')) {//开发环境
  config = {
    devtool: 'inline-source-map'
    // devtool:'hidden-source-map'
    // devServer: {
    //   port: 8089
    // },
  };
  [].push.apply(plugins, [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()//分析bundle代码组成
  ]);
} else {

}

for (var key in defaultConfig) {
  if (!config[key]) {
    config[key] = defaultConfig[key];
  }
}

module.exports = config;
