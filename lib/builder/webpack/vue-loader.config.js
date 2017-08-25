export default function vueLoader () {
  // https://vue-loader.vuejs.org/en
  const config = {
    postcss: this.options.build.postcss,
    extractCSS: this.options.build.extractCSS,
    cssSourceMap: this.options.build.cssSourceMap,
    preserveWhitespace: false,
    loaders: {
      'js': {
        loader: 'babel-loader',
        options: Object.assign({}, this.babelOptions)
      },
      // Note: do not nest the `postcss` option under `loaders`
      'css': this.styleLoader('css', [], true),
      'less': this.styleLoader('less', 'less-loader', true),
      'scss': this.styleLoader('scss', 'sass-loader', true),
      'sass': this.styleLoader('sass', {loader: 'sass-loader', options: { indentedSyntax: true }}, true),
      'stylus': this.styleLoader('stylus', 'stylus-loader', true),
      'styl': this.styleLoader('stylus', 'stylus-loader', true),
      'coffee': {
        loader: 'coffee-loader'
      },
      'yml': [
        {
          loader: 'json-loader'
        },
        {
          loader: 'yaml-loader'
        }
      ],
      'pug': {
        loader: 'pug-html-loader',
        query: {
          pretty: true
        }
      },
      'md': {
        test: /\.md$/,
        use: {
          loader: 'markdown-loader',
          options: {
            tag: 'div',
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: true
          }
        }
      }
    },
    template: {
      doctype: 'html' // For pug, see https://github.com/vuejs/vue-loader/issues/55
    }
  }

  // Return the config
  return config
}
