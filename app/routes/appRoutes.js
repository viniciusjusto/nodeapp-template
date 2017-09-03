const def = require('./exampleRoutes');

module.exports = function (app) {
    //Public routes
    app.use('/', def);
}