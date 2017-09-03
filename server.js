var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

require('./middlewares')(app);
require('./app/routes/appRoutes')(app);

//Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});