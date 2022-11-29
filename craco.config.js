// Populate the environment variables from normal cra.
require('react-scripts/config/env')

const { ModuleFederationPlugin } = require('webpack').container
const moduleFederationConfig = require('./modulefederation.config')

const publicUrl = process.env.PUBLIC_URL
const cssPrefix = 'ac'

module.exports = {
    style: {
        modules: {
            localIdentName: `${cssPrefix}__[local]--[hash:base64:5]`,
        },
    },
    webpack: {
        plugins: {
            add: [new ModuleFederationPlugin(moduleFederationConfig)],
        },
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.output.publicPath = publicUrl

            return webpackConfig
        },
    },
}
