const path = require('path');

// Exporting webpack configuration
module.exports = {
  // Entry point of the application
  entry: './src/index.js',
  output: {
    // Output bundle file name
    filename: 'bundle.js',
    // Output directory path
    path: path.resolve(__dirname, 'dist'),
    // Name of the library to expose
    library: 'designSystem',
    // Output format for the library
    libraryTarget: 'umd'
  },
  // Set the mode to production for optimizations
  mode: 'production',
};