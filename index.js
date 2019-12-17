const { resolve } = require('path')

module.exports = function (moduleOptions) {
  this.extendBuild((config, { isDev, isClient }) => {
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'vue-pug-lint-loader',
        exclude: /(node_modules)/,
        options: require(resolve(this.options.rootDir, '.puglintrc.js'))
      })
    }
  })
}

module.exports.meta = require('./package.json')
