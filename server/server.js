'use strict';

/** -------------------------------
*
*   LIST DEPEDENCIES
*
------------------------------- **/

let express = require('express'),
    path    = require('path');


let webpack               = require('webpack'),
    webpackDevMiddleware  = require('webpack-dev-middleware'),
    webpackHotMiddleware  = require('webpack-hot-middleware');

const app = express();
const config  =  require('../webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('public/client/index.html'));
});

let server = require(`${__dirname}/../config/common`);;
/* -------------------------------
*
*   OPEN PORT SERVER
*
------------------------------- **/

app.listen(server.development.expressPort)
console.log("---------------------------")
console.log("WELCOME TO MIS 2.0")
console.log("SERVER: " + server.development.expressHost + " PORT : " + server.development.expressPort)
console.log("by @Amartha Dev")
console.log("---------------------------")
