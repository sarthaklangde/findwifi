var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/gettingmean';
console.log('Node Env: ',process.env.NODE_ENV);
console.log('URI: ',process.env.MLAB_URI);
if(process.env.NODE_ENV === 'production'){
    dbURI = process.env.MLAB_URI;
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};



process.once('SIGUSR2', function () {
    gracefulShutdown('Nodemon Restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', function () {
    gracefulShutdown('App Termination', function () {
        process.exit(0);
    });
});
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku App Shutdown', function () {
        process.exit(0);
    });
});

require('./locations');
