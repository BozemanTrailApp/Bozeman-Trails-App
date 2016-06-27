var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

var app = express();
// var configSession = require('./passport/setsercets.js');

// require('./passport/passport.js')(passport);//self invokes passport

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/views'));
// app.use(passport.initialize());
// app.use(passport.session()); 
// app.use(session(configSession));


var trailsControl = require('./controllers/trailsControl.js');
var userControl = require('./controllers/userControl.js');

app.post('/trails', trailsControl.create);
app.get('/trails', trailsControl.read);
app.put('/trails/:id', trailsControl.update);
app.delete('/trails/:id',trailsControl.delete);
app.get('/trails/:id', trailsControl.readById);

// app.post('/login', userControl.login);
// app.post('/signup', userControl.signup);
// app.get('/logout', userControl.logout);
// app.get('/user/:id', userControl.getUser);
// app.get('/users', userControl.getAllUsers);

app.post('/user', userControl.create);
app.get('/user', userControl.read);
app.put('/user/:id', userControl.update);
app.delete('/user/:id', userControl.delete);
app.get('/user/:id', userControl.readById);



if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!

  var watcher = chokidar.watch('./server');
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}





mongoose.connect('mongodb://localhost:27017/bbtdb');
mongoose.connection.once('open', function(){
	console.log("Connected to the bbtdb database.");
});



app.get('/', function(req, res){
	res.render('index');
});



app.listen(8000, function(){
	console.log('The Magic is Happening on Port 8000');
});



