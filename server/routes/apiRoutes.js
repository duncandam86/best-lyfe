const db = require("../models");
// const sequelize = require("sequelize");
// const Op = Sequelize.Op;
const moment = require("moment");

module.exports = function(app) {
  app.post("/api/newHabit", function(req, res) {

    let whichUser;

    if (req.user) {
      whichUser = req.user.id
    } else {
      whichUser = 1
    }

    db.Habits.create({
      title: req.body.title,
      time: req.body.time,
      // frequency: req.body.frequency,
      comment: req.body.comment,
      UserId: whichUser
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/habits", function(req, res) {
    
    let whichUser;

    if (req.user) {
      whichUser = req.user.id
    } else {
      whichUser = 1;
    }

    db.Habits.findAll({
      where: {
        userId: whichUser
      }
    })
    .then(function(result) {
      // console.log(result);
      res.json(result);
    })
  });

  app.get("/api/habits/:id", function(req, res) {});

  app.put("/api/habits/:id", function(req, res) {});

  app.delete("/api/habits/:id", function(req, res) {
    console.log("Habit ID:");
    console.log(req);
  });
};
