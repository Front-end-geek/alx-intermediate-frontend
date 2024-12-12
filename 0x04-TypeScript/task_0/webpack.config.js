const path = require('path');

module.exports = {
  entry: './task_0/js/main.ts',  // Entry point of your TypeScript code
  output: {
    filename: 'bundle.js',  // The bundled JavaScript file after compilation
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],  // Resolve TypeScript and JavaScript extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/,  // Apply this rule for TypeScript files
        use: 'ts-loader',  // Use the TypeScript loader to transpile the code
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',  // Generate source maps for debugging
  mode: 'development',  // Set mode to development
};
