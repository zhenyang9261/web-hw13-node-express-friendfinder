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
    // Convert all strings in array to numbers
    var answerScores = req.body.answers.map(Number);
    console.log("answer scores: " + answerScores);
    // The variable to keep track of the index of the friendData and the smallest difference
    var index = 0;
    var smallestDiff = 0;

    // Loop through friendData and compare differences
    for (var i = 0; i < friendsData.length; i++) {
      // Convert strings to numbers
      var friendScores = friendsData[i].scores.map(Number);
      console.log("friendScores: " + friendScores);

      var sumDiff = 0;

      // Loop through the answer array and calculate absolute difference of each number
      for (var j = 0; j < friendScores.length; j++) {
        var diff = Math.abs(friendScores[j] - answerScores[j]);
        console.log(
          `friend score j: ${friendScores[j]}   answerScores: ${answerScores[j]}`
        );
        sumDiff += diff;
      }
      console.log(
        `smallest diff: ${smallestDiff}  current su diff: ${sumDiff}`
      );

      // Initiate the smallest diff with the very first element's diff
      if (i === 0) {
        smallestDiff = sumDiff;
      }

      if (sumDiff < smallestDiff) {
        smallestDiff = sumDiff;
        index = i;
        console.log(`index: ${index}`);
      }
    }

    console.log(friendsData[index]);
    res.json(friendsData[index]);
  });
};
