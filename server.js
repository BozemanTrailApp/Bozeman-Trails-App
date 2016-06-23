var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require('passport');//local auth
var mongoose = require('mongoose');

var app = express();

require('./passport/passport.js')(passport);//self invokes passport

app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(passport.initialize());//initialize passport
app.use(passport.session());//configure session through passport. Starts session on login
app.use(express.static(__dirname + '/views'));

var trailsControl = require('./controllers/trailsControl.js');
var userControl = require('./controllers/userControl.js');

app.post('/trails', trailsControl.create);
app.get('/trails', trailsControl.read);
app.put('/trails/:id', trailsControl.update);
app.delete('/trails/:id',trailsControl.delete);
app.get('/trails/:id', trailsControl.readById);

app.post('/auth', passport.authenticate('local-signup'), userControl.login);//post login includes passport authenticate
app.get('/user/me', userControl.getMe);//**gets current user after login if you want to display user info on view
app.get('/user/logout', userControl.logout);//**logs out user and ends session

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



