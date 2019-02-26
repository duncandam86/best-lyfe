'use strict';

require('dotenv').load();

//Account SID and Auth Token hidden in .env
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

//Message Info
client.messages
    .create({
        to: process.env.MY_NUMBER,
        from: "+17738294347",
        body: "This is hard coded text to hold the place of a relevant message."
    })
    .then(message => console.log(message.sid))
    .catch(err => console.log(err));