let user1 = {
    name: "John",
    years: 30,
    // isAdmin:true

}
const { name, age, isAdmin = false } = user1;
// console.log(name);
// console.log(age);
// console.log(isAdmin);

//-------------
const planet = {
    name: "Earth",
}
let currentVisitor = "jhgjhg";
//-------------
let phrase = "Hello"

if (true) {
    let user = "John";
    function sayHi() {
        // console.log(`${phrase}, ${user}`)
    }
}
sayHi()
//-------------
const user = {};
user.name = "John";
user.surname = "Smith";
// console.log(user);
user.name = "Pete";
// console.log(user);
delete user.name;
// console.log(user);
//-------------
let salaries = {
    Fred: 100,
    Ted: 100,
    Ghaith: 130
}

//-------------