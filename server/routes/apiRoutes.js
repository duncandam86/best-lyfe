const db = require("../models");
// const sequelize = require("sequelize");
// const Op = Sequelize.Op;
const moment = require("moment");

module.exports = function(app) {
  app.post("/api/newHabit", function(req, res) {
    // console.log("Habit Data:");
    console.log(req.body);
    console.log("User: " + req.user.id)
    let userId;

    if (req.user.id) {
      userId = req.user.id
    } else {
      userId = 9999
    }

    db.Habits.create({
      title: req.body.title,
      time: req.body.time,
      // frequency: req.body.frequency,
      comment: req.body.comment,
      UserId: userId,
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
