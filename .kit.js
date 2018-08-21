module.exports = {
    dependencies: [
        'wet-boew/wet-boew-cdn#v4.0.28.1',
        'wet-boew/themes-cdn#GCWeb'
    ],
    configureWebpack: {
        externals: {
            jquery: 'jQuery'
        }
    }
}