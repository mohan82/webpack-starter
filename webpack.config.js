var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var assetsDir = path.resolve(__dirname, 'public/assets');

var config = {

    entry:[ './app/index.js'],
    devtool:'source-map',
    output:{
        path:assetsDir,
        filename:'bundle.js',
        publicPath:'/public/assets/'
    },
    module: {
        loaders: [
            {
                test: /(\.js)$/,
                loader: 'babel',
                include: path.join(__dirname, 'app'),
                query: {
                    presets: ['es2015']
                }
            },{
                test: /index.html$/,
                loader: "file?name=[name].[ext]",
            }
        ]
    },
    resolve: {
        root: path.resolve('./app')
    },
    plugins:[configureHtml(),
    provideQuery()]

};
function configureHtml(){
    return new HtmlWebpackPlugin
    (
        {
            template:'app/index.ejs',
            inject:'body'
        }
    );
}

function provideQuery() {
    return new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    });
}
module.exports =config;
