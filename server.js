var express = require('express'),
    app = express(),
    util = require('./utility/util'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    path = require('path'),
    config = require('./config/config'),
    gamingSquareRoutes = require('./routes/routes'),
    helmet = require('helmet'),
    cors = require('cors');
//mongoose.Promise = require('bluebird');
app.use(cors());
//Hello there
// configuration
var port = config.serverPort;
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
app.set('superSecret', config.jwtSecret); // secret variable
app.use(helmet());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', gamingSquareRoutes);
app.use(express.static(path.join(__dirname, '/images')));
//app.use(express.static(path.join(__dirname, 'qr_images/company')));
// basic route (http://localhost:8080)
//app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send("Api Works");
});

// start the server
app.listen(port, function () {
  console.log("Server started at port 3000");
});