const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUT_TOKEN;

const client = require("twilio")(accountSid, authToken);

client.messages
    .create({
    to: process.env.MY_PHONE_NUMBER,
    from: "+17738294347",
    body: "This is hard coded text to hold the place of a relevant message."
})
.then(message => console.log(message.sid));
