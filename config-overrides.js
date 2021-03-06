/* eslint-disable no-undef */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
} = require('customize-cra')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const path = require('path')
const fs = require('fs')

const { getLessVars } = require('antd-theme-generator')
const AntDesignThemePlugin = require('antd-theme-webpack-plugin')

const themeVariables = getLessVars(
  path.join(__dirname, './src/styles/variables.less')
)
const darkVars = {
  ...getLessVars('./node_modules/antd/lib/style/themes/dark.less'),
}
const lightVars = {
  ...getLessVars('./node_modules/antd/lib/style/themes/default.less'),
}

fs.writeFileSync('./src/dark.json', JSON.stringify(darkVars))
fs.writeFileSync('./src/light.json', JSON.stringify(lightVars))
fs.writeFileSync('./src/theme.json', JSON.stringify(themeVariables))

const themeOption = {
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src/styles'),
  // define which variables to change
  varFile: path.join(__dirname, './src/styles/variables.less'),
  // define which variables can be changed
  themeVariables: Array.from(new Set([...Object.keys(themeVariables)])),
  generateOnce: false, // generate color.less on each compilation
}

const lessLoader = () => {
  return addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  })
}

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackPlugin(new AntDesignThemePlugin(themeOption)),
  lessLoader(),
  (config, env) => {
    config = rewireReactHotLoader(config, env)
    return config
  }
)
