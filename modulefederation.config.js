const packageJson = require('./package.json')

module.exports = {
    name: 'marketplace',
    filename: 'remoteEntry.js',
    exposes: {
        './MarketplaceApp': './src/bootstrap',
    },
    shared: packageJson.dependencies,
}
