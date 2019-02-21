var db = require("../models");
var passport = require("../config/passport");
// const user = require("./user/user")

module.exports = function(app) {
  // // Routes
  // app.use('/user', user)

  //Ping Users API
  app.get("/api/users", function(req, res) {
    db.User.findAll().then(function(result) {
      res.json(result);
    });
  });

  // some stuff
  // about loggin in
  // just copied from a working example

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed

    // res.json("/members");

    console.log("logged in", req.user.dataValues);
    var userInfo = {
      userEmail: req.user.userEmail,
      userid: req.user.id
    };
    res.send(userInfo);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      userEmail: req.body.userEmail,
      password: req.body.password,
      userPhone: req.body.userPhone,
      userFirstName: req.body.userFirstName,
      userLastName: req.body.userLastName
    })
      .then(function(data) {
        console.log(data.dataValues);
        //res.redirect(307, "/login");
        // res.json("SQLDataValues ", data.dataValues);
      })
      .catch(function(err) {
        console.log("SQLerror ", err.errors[0].message);
        //res.json(err);
        res.json(err.errors[0].message);
      });
  });

  // Route for logging user out
  app.post("/logout", function(req, res) {
    req.logout();
    console.log(req.user);
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({
        loggedIn: false
      });
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.userEmail,
        firstName: req.user.userFirstName,
        lastName: req.user.userLastName,
        phone: req.user.userPhone,
        photo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_portrait%2C_male_%28rectangular%29.png"
      });
    }
  });
};
