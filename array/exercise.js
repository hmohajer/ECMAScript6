const arr = [1, 2, 3];
// console.log(arr.concat([4, 5], 6));  // returns [1, 2, 3, 4, 5, 6];   arr unmodified
// console.log(arr.concat([4, [5, 6]]));
//###################################################
arr.splice(1, 0, 6, 7, 8);
// console.log(arr);
arr.splice(2, 1, 4, 5);
// console.log(arr);
//###################################################
arr.reverse();
// console.log(arr);
//###################################################
arr.sort();
// console.log(arr);
//###################################################
const arr1 = [{ id: 5, name: "Sam" }, { id: 7, name: "Pouyan" }];
// console.log(arr1.find(x => x.id === 5));
// console.log(arr1.find(x => x.id > 5));
// console.log(arr1.find(({ name }) => name === "Sam"));
// console.log(arr1.find(x => x == 5));


//###################################################
const arr2 = [5, 7, 12, 15, 17];
// console.log(arr2.some(x => x % 2 == 0));
// console.log(arr2.some(x => x == 11));

// console.log(arr2.every(x => x % 2 == 0));
//###################################################
const cards = [];
for (let suit of ['H', 'C', 'D', 'S']) // hearts, clubs, diamonds, spades
    for (let value = 1; value <= 13; value++)
        cards.push({ suit, value });

// console.log(cards.filter(x => x.value == 2));
// console.log(cards.filter(c => c.suit === "D"));
// console.log(cards.filter(c => c.suit === "H" && c.value > 10));
//###################################################
function cardToString(c) {
    const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
    const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
    for (let i = 2; i <= 10; i++) values[i] = i;
    return values[c.value] + suits[c.suit];
}

// console.log(cards.filter( c => c.value < 2).map(cardToString));
// console.log(cards.filter(c => (c.value > 10 || c.value < 2) && c.suit === "H").map(cardToString));

//###################################################
const arr4 = [2, 9, 4, 6, 3];
// console.log(arr4.reduce((a,x) => a += x , 0));
console.log(arr4.reduce((a, x) => a += x));
//###################################################
const words = ["      Beachball", "Rodeo", "Angel",
    "Aardvark", "Xylophone", "November", "Chocolate",
    "Papaya", "Uniform", "Joker", "Clover", "Bali"];

const alphabetical = words.reduce((a, x) => {
    if (!a[x[0]]) {
        a[x[0]] = [];
    }
    a[x[0]].push(x);
    return a;
}, {})
console.log(alphabetical);
//###################################################
console.log(
    words.reduce((a, w) => w.length > 6 ? a + " " + w : a, "").trim()
);
//###################################################
console.log(
    words.filter(w => w.length > 6).join(" ").trim()
);
//###################################################
// Exercise 1
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.
// The function should not modify the array. It should return the new array

function filterRange(arr, from, to) {
    return arr.filter(item => item >= from && item <= to);
}

let arr6 = [5, 3, 8, 1, 4, 3]
let filtered = filterRange(arr6, 3, 5)

console.log(filtered);
console.log(arr6);

//###################################################
// Exercises 2
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 29 }

let users = [ john, pete, mary ];

let names = users.map(u => u.name);

console.log(names); // John, Pete, Mary
//###################################################
// Exercises 3
// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

function getAverageAge(arr){
    return arr.reduce((a,{age}) => a += age ,0)/ arr.length; 
}
let arr7 = [ john, pete, mary ]

console.log( getAverageAge(arr7) ) 
//###################################################
//###################################################
//###################################################
//###################################################
//###################################################