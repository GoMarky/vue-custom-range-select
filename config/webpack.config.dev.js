const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const path = require('path')
const outputFile = 'vue-custom-range-select'
const globalName = 'VueCustomRangeSelect'

module.exports = merge(base, {
    entry: './dev/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: outputFile + '.common.js',
        library: globalName,
        libraryTarget: 'umd',
    },
      devtool: 'source-map',
})
