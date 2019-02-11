let thisString = "111";
let thisArray = [];

let i = 4;

for (i; i > 0; i--) {
    if (i === 1) {
        console.log("1");
        thisString += "1"
    } else {
        console.log("0");
        thisString += "0";
    }
}

console.log(thisString);

thisArray = thisString.split("");
thisArray.map(index => parseInt(index))
console.log(thisArray);