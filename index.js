/**
 * Created by youxiachai on 14-4-21.
 */


var express = require('express'),
    http = require('http'),
    morgan = require('morgan'),
    app = express();

app.set('port', 5000);

app.use(morgan('dev'));

app.use(function (req, res, next) {
    //支持跨域访问
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();

})
app.use(express.static(__dirname + '/list/'));
app.use(express.static(__dirname + '/public/'));


http.createServer(app).listen(app.get('port'), function () {
    console.log('env: ' + process.env.NODE_ENV);
    console.log('Express server listening on port ' + app.get('port'));
});
