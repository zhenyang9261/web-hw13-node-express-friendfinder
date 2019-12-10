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

  // API POST request. Calculation based on data in request body
  app.post("/api/survey", function(req, res) {
    // Convert all strings in array to numbers
    var answerScores = req.body.answers.map(Number);

    // The variables to keep track of the index of the friendData with the smallest difference
    var index = 0;
    var smallestDiff = 0;

    // Loop through friendData and compare differences
    for (var i = 0; i < friendsData.length; i++) {
      // Convert all strings in array to numbers
      var friendScores = friendsData[i].scores.map(Number);

      var sumDiff = 0;

      // Loop through the answer array and calculate absolute difference with the score array in friendsData
      for (var j = 0; j < friendScores.length; j++) {
        var diff = Math.abs(friendScores[j] - answerScores[j]);
        sumDiff += diff;
      }

      // Initiate the smallest diff with the very first element's diff
      if (i === 0) {
        smallestDiff = sumDiff;
      }

      // Always keep the smaller value
      if (sumDiff < smallestDiff) {
        smallestDiff = sumDiff;
        index = i;
      }
    }

    res.json(friendsData[index]);
  });
};
