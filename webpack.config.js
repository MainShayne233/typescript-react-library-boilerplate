const webpack = require('webpack');
const path = require('path');

const DEV = 'development';
const PROD = 'production';
const TEST = 'test';
const DEFAULT = 'DEFAULT';
const ENVIRONMENT = process.env.NODE_ENV || DEV;

if (ENVIRONMENT !== DEV && ENVIRONMENT !== PROD && ENVIRONMENT !== TEST) {
  throw new Error(`${ENVIRONMENT} is not a valid environment`);
}

const getValueForEnvironment = (environmentValueTable) => {
  if (ENVIRONMENT in environmentValueTable) {
    return environmentValueTable[ENVIRONMENT];
  } else if (DEFAULT in environmentValueTable) {
    return environmentValueTable[DEFAULT];
  } else {
    throw new Error(`No environment value defined for ${ENVIRONMENT}`);
  }
};

const getPlugins = () =>
  getValueForEnvironment({
    [DEV]: [new webpack.HotModuleReplacementPlugin()],
    [DEFAULT]: [],
  });

const getPort = () =>
  getValueForEnvironment({
    [DEV]: 4000,
    [DEFAULT]: null,
  });

const getPublicPath = () =>
  getValueForEnvironment({
    [DEV]: `http://localhost:${getPort()}/`,
    [DEFAULT]: '',
  });

const getEntries = () =>
  getValueForEnvironment({
    [DEV]: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?${getPublicPath()}`,
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'demo', 'index.ts'),
    ],
    [DEFAULT]: './src/index.ts',
  });

const getOutput = () =>
  getValueForEnvironment({
    [DEV]: {
      path: path.join(__dirname, 'lib'),
      filename: '[name].bundle.js',
      publicPath: getPublicPath(),
    },
    [DEFAULT]: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.js',
      library: 'index',
      libraryTarget: 'commonjs2',
    },
  });

const getDevTool = () =>
  getValueForEnvironment({
    [DEV]: 'cheap-module-eval-source-map',
    [DEFAULT]: false,
  });

const getTarget = () =>
  getValueForEnvironment({
    [TEST]: 'node',
    [DEFAULT]: 'web',
  });

const getMode = () =>
  getValueForEnvironment({
    [PROD]: PROD,
    [DEFAULT]: DEV,
  });

module.exports = {
  mode: getMode(),
  target: getTarget(),
  devtool: getDevTool(),
  entry: {
    app: getEntries(),
  },
  output: getOutput(),
  resolve: {
    modules: [__dirname, 'node_modules', 'src'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
  },
  plugins: getPlugins(),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
    overlay: true,
    port: getPort(),
    clientLogLevel: 'none',
    historyApiFallback: { index: 'demo/index.html' },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
};
