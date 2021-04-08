function getGreeting() {
    return "Hello";
}
// console.log(getGreeting());
// console.log(getGreeting);
//###############################################
const checkAge = age => (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
// console.log(checkAge(17));
//###############################################
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// P.S. In this task the function should support only natural values of n: integers up from 1.
const pow = (x, n) => {
    if (Number.isInteger(n) && n > 0) {
        let result = x;
        for (let i = 1; i < n; i++) {
            result *= x;
        }
        return result;
    } else {
        return "not valid";
    }
}
console.log(pow(3, 3));
//###############################################
const ask = (question, yes, no) => (confirm(question)) ? yes() : no();

// ask(
//     "Do you agree?",
//     () => { alert("You agreed.") },
//     () => { alert("You canceled the execution.") }
// )
//###############################################
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    num1: null,
    num2: null,
    read: function () {
        this.num1 = parseInt(prompt("enter num1"));
        this.num2 = parseInt(prompt("enter num2"));
    },
    mul: function () { return this.num1 * this.num2; },
    sum: function () { return this.num1 + this.num2; }
};

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
//###############################################
// Write a function min(a,b) which returns the least of two numbers a and b. Use arrow function along with the question mark operator ?
const min = (a, b) => a > b ? b : a;
console.log(min(4, 2));
//###############################################
