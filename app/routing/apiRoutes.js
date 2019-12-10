// Load data
var friendsData = require("../data/friends");

/*
 * Routes that handle HTML GET and POST requests
 */
module.exports = function(app) {
  // API GET request - send a JSON object to client
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST request
  app.post("/api/survey", function(req, res) {
    res.json("Jenny");
  });
};
