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



let tab = [0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1];

let streaks = tab.reduce(function(res, n) { 
  if (n) res[res.length-1]++;
  else res.push(0);
  return res;
}, [0]);

console.log(streaks.join(","));
console.log(Math.max.apply(Math, streaks));