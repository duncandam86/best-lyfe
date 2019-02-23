const db = require("../models");
// const sequelize = require("sequelize");
// const Op = Sequelize.Op;
const moment = require("moment");
moment().format();

module.exports = function(app) {
  app.post("/api/newHabit", function(req, res) {
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
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/habits", function(req, res) {
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
    }).then(function(result) {
      res.json(result);
    });
  });

  app.get("/api/habits/:id", function(req, res) {
    //console.log("DISPLAY HABIT ID: " + req.params.id);
    let whichUser;

    if (req.user) {
      whichUser = req.user.id;
    } else {
      whichUser = 1;
    }

    db.Habits.findOne({
      where: {
        userId: whichUser,
        id: req.params.id
      }
    }).then(function(result) {
      console.log(result);
      res.json(result);
    });
  });

  app.put("/api/habits/:id", function(req, res) {
    //console.log("UPDATE HABIT ID: " + req.params.id);
    //console.log("ReqBody ", req.body);

    const habit = req.body[0];

    if (moment(habit.updatedAt).format("ll") === moment().format("ll")) {
      //console.log("The day’s match");
      //* nothing should happen
      //* if it was updated yesterday, then
    } else if (
      moment(habit.updatedAt).format("ll") ===
      moment()
        .subtract(1, "days")
        .format("ll")
    ) {
      //console.log("The updated At is the same as yesterday ");
      habit.consecutive++;
      //console.log("number of consecutive days " + habit.consecutive);

      //* if it way more than a day ago that it was updated, then record the longestStreak if possible and set consecutive back to 0
    } else if (moment(habit.updatedAt).format("ll") > moment().format("ll")) {
      if (habit.consecutive > habit.longestStreak) {
        habit.longestStreak === habit.consecutive;
      }
      habit.consecutive = 0;
      //console.log("habit.consecutive ", habit.consecutive);
    }
    //console.log(habit);
    db.Habits.update(
      {
        consecutive: habit.consecutive,
        longestStreak: habit.longestStreak,
        checkedDate: new Date()
      },
      {
        where: { id: habit.id }
      }
    ).then(function(result) {
      res.json({
        UPDATE: result
      });
    });
  });

  app.put("/api/edit/:id", function(req, res) {
    //console.log("EDIT HABIT ID: " + req.params.id);
    //console.log("ReqBody ", req.body);
    db.Habits.update(
      {
        title: req.body.title,
        time: req.body.time,
        comment: req.body.comment,
        editDate: req.body.editDate
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(result) {
      res.json({
        UPDATE: result
      });
    });
  });

  app.delete("/api/habits/:id", function(req, res) {
    //console.log("DELETE HABIT ID: " + req.params.id);
    db.Habits.destroy({
      where: { id: req.params.id }
    }).then(function(result) {
      res.json({
        DELETE: result
      });
    });
  });
};


