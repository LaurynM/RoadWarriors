// Dependencies
var path = require("path");

// Routing
module.exports = function(app) {
    // route for survey page
    app.get(`/survey`, function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get(`/style.css`, function(req, res) {
      res.sendFile(path.join(__dirname, "../public/style.css"));
    });
    app.get(`/road.jpg`, function(req, res) {
      res.sendFile(path.join(__dirname, "../public/road.jpg"));
    });
  
    // default route
      app.get(`/`, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
  };