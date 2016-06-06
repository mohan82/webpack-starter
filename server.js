var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config')
var webpack = require('webpack')
var port = 9000;
// config.watch = true;
 config.entry.unshift('webpack-dev-server/client?http://localhost:'+port+'/',
     'webpack/hot/dev-server');
config.plugins.unshift(new webpack.HotModuleReplacementPlugin())
console.log(config);

new WebPackDevServer(webpack(config), {
    publicPath          : config.output.publicPath,
    hot                : true,
    historyApiFallback : true,
    contentBase:'public/assets'

}).listen(port, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }
});
console.log("Listening to Port %s", port);
