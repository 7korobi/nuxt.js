'use strict'

import { defaults } from 'lodash'
import { extractStyles, styleLoader } from './helpers'



export default function ({ isClient }) {
  let babelOptions = JSON.stringify(defaults(this.options.build.babel, {
    presets: ['vue-app'],
    babelrc: false,
    cacheDirectory: !!this.dev
  }))

  // https://github.com/vuejs/vue-loader/blob/master/docs/en/configurations
  let config = {
    postcss: this.options.build.postcss,
    loaders: {
      'js': 'babel-loader?' + babelOptions,
      'css': styleLoader.call(this, 'css'),
      'less': styleLoader.call(this, 'less', 'less-loader'),
      'sass': styleLoader.call(this, 'sass', 'sass-loader?indentedSyntax&?sourceMap'),
      'scss': styleLoader.call(this, 'sass', 'sass-loader?sourceMap'),
      // Note: do not nest the `postcss` option under `loaders`
      'stylus': styleLoader.call(this, 'stylus', 'stylus-loader'),
      'styl': styleLoader.call(this, 'stylus', 'stylus-loader'),
      'coffee': 'coffee-loader',
      'yml': 'json-loader!yaml-loader',
      'pug': 'pug-html-loader',
      'md': {
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
    },
    preserveWhitespace: false,
    extractCSS: extractStyles.call(this)
  }
  // Return the config
  return config
}
