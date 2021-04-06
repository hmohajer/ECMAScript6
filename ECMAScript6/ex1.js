let user = {
    name: "John",
    years: 30,
    // isAdmin:true

}
const {name, age, isAdmin = false} = user;
console.log(name);
console.log(age);
console.log(isAdmin);