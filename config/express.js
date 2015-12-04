var config = require('./config'),
    http = require('http'),
    socketio = require('socket.io'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    passport = require('passport'),
    flash = require('connect-flash');
    
    

module.exports = function(db) {
    var app = express();
    
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());
    
    var mongoStore = new MongoStore({
        db: db.connection.db
    });
    
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret,
        store: mongoStore
    }));

    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    
    require('../app/routes/index.server.route.js')(app);
    require('../app/routes/language.server.route.js')(app);
    require('../app/routes/user.server.route.js')(app);
    
    app.use('/public', express.static('/home/ubuntu/workspace/public'));
    app.use('/node_modules', express.static('/home/ubuntu/workspace/node_modules'));
    app.use('bower_components', express.static('/home/ubuntu/workspace/bower_components'));
    
    
    return app;
};