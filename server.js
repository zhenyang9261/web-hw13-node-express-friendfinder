// Dependencies
var express = require("express");
var path = require("path");

// Express Configurations
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/app/public/assets")));

// Sets port the server listens on
var PORT = process.env.PORT || 5000;

// Routers
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Server starts
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
