const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");

const db = require("./server/models");
const passport = require("./server/config/passport");

//Read and set environment variables
require("dotenv").config();
console.log(process.env.TWILIO_ACCOUNT_SID);
console.log(process.env.TWILIO_AUT_TOKEN);

// Define middleware here
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Passport
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
require("./server/routes/user")(app);
require("./server/routes/apiRoutes")(app);
require("./server/routes/htmlRoutes")(app);

//Sequelize
const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
