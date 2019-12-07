// Dependencies
var express = require("express");

// Express Configurations
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets port the server listens on
var PORT = process.env.PORT || 5000;

// Routers
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Server starts
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
