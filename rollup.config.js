const scss = require('rollup-plugin-scss')
const VuePlugin = require('rollup-plugin-vue')
const BabelPlugin = require('rollup-plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const alias = require('@rollup/plugin-alias')
const fs = require('fs')

const buildConfigs = []
const files = fs.readdirSync('./src/icons')

let scssOutput = `./lib/icon.css`;
files.forEach((name) => {
  const pkgConfig = {
    external: ['vue'],
    input: './src/icons/' + name,
    output: {
      file: `./lib/${name.replace(/\.vue$/, '')}.js`,
      format: 'es',
      name,
      globals: {
        vue: 'Vue'
      }
    },
    plugins: [
      alias({
        resolve: ['.js', '.jsx', '.vue'],
      }),
      VuePlugin({
        css: false,
        template: {
          isProduction: true,
        }
      }),
      BabelPlugin(
        {
          exclude: 'node_modules/**',
          extensions: ['.js', '.jsx', '.vue'],
          presets: [
            ['@babel/preset-env',]
          ]
        }
      ),
      commonjs(),
      scss({
        output: scssOutput
      }),
    ]
  }
  // 只输出一次
  scssOutput = false
  buildConfigs.push(pkgConfig)
})

module.exports = buildConfigs
