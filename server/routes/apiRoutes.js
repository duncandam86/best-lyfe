const db = require("../models");
// const sequelize = require("sequelize");
// const Op = Sequelize.Op;
const moment = require("moment");

module.exports = function (app) {
  app.post("/api/newHabit", function (req, res) {
    let whichUser;

    if (req.user) {
      whichUser = req.user.id;
    } else {
      whichUser = 1;
    }

    db.Habits.create({
      title: req.body.title,
      time: req.body.time,
      // frequency: req.body.frequency,
      comment: req.body.comment,
      UserId: whichUser
    }).then(function (results) {
      res.json(results);
    });
  });

  app.get("/api/habits", function (req, res) {
    let whichUser;

    if (req.user) {
      whichUser = req.user.id;
    } else {
      whichUser = 1;
    }

    db.Habits.findAll({
      where: {
        userId: whichUser
      }
    }).then(function (result) {
      // console.log(result);
      res.json(result);
    });
  });

  app.get("/api/habits/:id", function (req, res) {
    console.log("DISPLAY HABIT ID: " + req.params.id);
    res.json({
      DISPLAY: req.params.id
    });
  });

  app.put("/api/habits/:id", function (req, res) {
    console.log("UPDATE HABIT ID: " + req.params.id);

    let habit = req.body;

    //* current Date
    let d1 = new Date();
    //* last update Date
    let d2 = new Date(habit.updatedAt);

    //* find out how long from this moment compared to the last update
    let diff = Math.abs(d1 - d2);
    // console.log(“Difference in Milliseconds + ” + diff);
    let days = (diff / (1000 * 60 * 60 * 24)) % 7;

    //* LOGIC
    // if you havent updated your habits in more than a day, then see if you need to update longest streak and reset the streak
    if (Math.floor(days) > 1) {
      // checking for longest streak
      if (habit.consecutive > habit.longestStreak) {
        // console.log(longestStreak);
        habit.longestStreak = habit.consecutive;
      }
      // restart your streak
      // let streak = 0;
    } else if (Math.floor(days) === 1) {
      // console.log(“streak and longest streak” + streak + longestStreak);
      habit.consecutive++;
    }

    console.log(habit);
    res.json({
      UPDATE: habit
    });
  });

  app.put("/api/habits/", function (req, res) {
    console.log(req.body);

    res.json({
      UPDATE: req.body
    });
  });

  app.delete("/api/habits/:id", function (req, res) {
    console.log("DELETE HABIT ID: " + req.params.id);
    res.json({
      DELETE: req.params.id
    });
  });
};
