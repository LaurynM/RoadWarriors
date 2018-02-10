// Load Data
var warriors = require("../data/warriors");

// Routing
module.exports = function(app) {
    // read data in warriors
    app.get("/api/warriors", function(req, res) {
      res.json(warriors);
    });

    // add data to warriors
    app.post("/api/warriors", function(req, res) {
        // Compatibility Logic
        var diff = [];
        // loop through each warrior
        for (var i = 0; i < warriors.length; i++) {
            var sum = 0;
            // loop through each warrior's scores
            for (var n = 0; n < warriors[i].scores.length; n++) {
                // find the absolute value of the difference between each of
                // the incoming warrior's and the existing warriors' scores
                var x = Math.abs(req.body.scores[n] - warriors[i].scores[n]);
                // add the values together
                sum += x;
            }
            // push the sum to the diff array
            diff.push(sum);
        }

        // add incoming results to warriors data
        warriors.push(req.body);

        //return the name and photo of the closest match
        var i = diff.indexOf(Math.min(...diff));
        var match = {
            "name": warriors[i].name, 
            "photo": warriors[i].photo
        };
        res.json(match);
      });
}