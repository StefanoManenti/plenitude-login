// vue.config.js
module.exports = {
    chainWebpack: config => {
        if (config.plugins.has('extract-css')) {
            const extractCSSPlugin = config.plugin('extract-css')
            extractCSSPlugin && extractCSSPlugin.tap(() => [{
                filename: '[name].css',
                chunkFilename: '[name].css'
            }])
        }
    },
    configureWebpack: {
        //devtool: 'source-map',
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js'
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    },
    // devServer: {
    //     proxy: {
    //         '^/graphql': {
    //             target: 'https://publish-p45317-e970431.adobeaemcloud.com',
    //             ws: true,
    //             changeOrigin: true
    //         },
    //     }
    // },
    devServer: {        
        //proxy: 'https://author-p45317-e970431.adobeaemcloud.com/', // test + 1
        //proxy: 'https://publish-p45317-e970431.adobeaemcloud.com/',      // test + 1
        proxy: 'https://publish-p45317-e201111.adobeaemcloud.com/',   // pp
        //proxy: 'https://pp.eniplenitude.com/',                        // pp
        //proxy: 'https://publish-p45317-e201079.adobeaemcloud.com/',   // prod
    }
}