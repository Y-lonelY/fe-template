/* eslint-disable no-undef */
const { override, addLessLoader, addWebpackAlias } = require('customize-cra')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const path = require('path')
const { getThemeVariables } = require('antd/dist/theme')

module.exports = override(
  addLessLoader({
    lessOptions: {
      modifyVars: {
        ...getThemeVariables({
          dark: true,
        }),
        'primary-color': '#13C2C2',
      },
      javascriptEnabled: true,
    },
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
  (config, env) => {
    config = rewireReactHotLoader(config, env)
    return config
  }
)
