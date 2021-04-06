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
// let {Fred = 0, Ted = 0, Ghaith = 0} = salaries;
// console.log(Fred+Ted+Ghaith);
console.log(Object.values(salaries));
console.log(Object.keys(salaries));
//-------------
let a = 2, b = 1;
let result = a + b < 4 ? "Below" : "Over";
console.log(result);
//-------------
let message = "";
let login = "";
result = login == "Employee" ? 'Hello' : (login == "Director" ? "Greetings" : (login == "" ? "No login" : ""))
console.log(result);
//-------------