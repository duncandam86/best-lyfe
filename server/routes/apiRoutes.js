const db = require("../models");
// const sequelize = require("sequelize");
// const Op = Sequelize.Op;
const moment = require("moment");

module.exports = function(app) {
  app.post("/api/newHabit", function(req, res) {
    // console.log("Habit Data:");
    // console.log(req.body);
    db.Habits.create({
      title: req.body.title,
      time: req.body.time,
      // frequency: req.body.frequency,
      comment: req.body.comment,
      UserId: 1,
      recordArray: 0
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/habits", function(req, res) {});

  app.get("/api/habits/:id", function(req, res) {});

  // app.update("/api/habits/:id", function(req, res) {});

  app.delete("/api/habits/:id", function(req, res) {
    console.log("Habit ID:");
    console.log(req);
  });
};
