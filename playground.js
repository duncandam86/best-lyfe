// //thisString already has some tracked data
// let thisString = "1101";
// let thisArray = [];

// //i represents the difference between Date.now and lastUpdated
// let i = 3;

// for (i; i > 0; i--) {
//     //if i is 0, close loop.  If i is 1, add a 1. Add a 0 for every other day between .now and lastUpdated.
//     if (i === 1) {
//         console.log("1");
//         thisString += "1"
//     } else {
//         console.log("0");
//         thisString += "0";
//     }
// }

// //Our new string to be updated in the Database.
// console.log(thisString);

// //Just to remind myself how to do this.
// thisArray = thisString.split("");
// console.log(thisArray);



// let tab = [0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1];

// let streaks = tab.reduce(function(res, n) { 
//   if (n) res[res.length-1]++;
//   else res.push(0);
//   return res;
// }, [0]);

// console.log(streaks.join(","));
// console.log(Math.max.apply(Math, streaks));

const moment = require("moment");
moment().format();

const habit = {
    title: "water",
    updatedAt: "2019-02-9 01:59:19",
    consecutive: 2
}

console.log("Yesterday " + moment().subtract(1, "days").format("ll"))
console.log("Current Day " + moment().format("ll"));
console.log("-----------------")

//* For Each Habit....

console.log("Updated At Moment " + moment(habit.updatedAt).format("ll"))

//* if the days are the same, dont update the streak
if (moment(habit.updatedAt).format('ll') === moment().format('ll')) {
  console.log("The day’s match");
  //* nothing should happen


  //* if it was updated yesterday, then
} else if (moment(habit.updatedAt).format('ll') === moment().subtract(1, 'days').format('ll')) {
  console.log("The updated At is the same as yesterday ")
  habit.consecutive++;
  console.log("number of consecutive days " + habit.consecutive);

  //* if it way more than a day ago that it was updated, then record the longestStreak if possible and set consecutive back to 0
} else if (moment(habit.updatedAt).format("ll") > moment().format("ll")) {
  if (habit.consecutive > habit.longestStreak) {
    habit.longestStreak === habit.consecutive;
  }
  habit.consecutive = 0;
  console.log("habit.consecutive " + habit.consecutive);
}

console.log(habit);


function ClockTime () {
  
  for (let i = 0; i > 1000; i++) {
    let nowTime = 0 //moment.checkTime
    let habitTime = 1 //(habit.time or whatever)
    if (nowTime === habitTime) {
      //trillio
      console.log("Trillio");
    }
  }
  
  ClockTime()
}