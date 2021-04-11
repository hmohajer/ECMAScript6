//  -split the string
//  -put number in one array
//  -put operators in another array
//  -start from * and / calculate the result
//  -and then - and + calculate the result
//  ---
//  ---one function to calculate two numbers and return the result
//  ---one function to split the string and return two array and calculate the expression


//when document is ready this start to run
$(function () {
    const equal = $("#equalBtn");
    const result = $("#result");
    const expression = $("#statment");
    const expression1 = $("#statment1");


    $(".btn").on("click", function () {
        // console.log(this.textContent);
        expression.val(expression.val() + this.textContent);
    });

    equal.on("click", () => {
        // calculate(expression);
        let value = expression.val();
        if(value !== "="){
        result.text(calculate(value));
        expression1.text(value);
    }
    expression.val("");
    });

    $("#clearBtn").on("click", function () {
        console.log(this.textContent);
        expression1.text("");
        expression.val("");
        result.text(0);
    });

    //preventing from invalid input
    expression.bind("input", function () {
        let c = this.selectionStart,
            r = /[^0-9\-/*+.]/,
            v = $(this).val();
        if (r.test(v)) {
            $(this).val(v.replace(r, ''));
            c--;
        }
        this.setSelectionRange(c, c);
    });

});
//##############  END MAIN  ############################################

function calculate(str = "2+2/5-8*31") {
    const operatorList = ["-", "+", "/", "*"];
    let numbers = str.split(/[\-*/+]/).map(parseFloat);
    let arr = str.split("");
    let operators = arr.filter(x => operatorList.some(y => y == x));

    let index = operators.findIndex(x => x === "/" || x === "*");
    // console.log(index);
    while (index >= 0) {
        // console.log(numbers[index],numbers[index+1],operators[index]);
        numbers[index] = calc(numbers[index], numbers[index + 1], operators[index]);
        numbers.splice(index + 1, 1);
        operators.splice(index, 1);
        // console.log(numbers);
        // console.log(operators);
        index = operators.findIndex(x => x === "/" || x === "*");
        // console.log(index);
    }
    //this works just for + and -
    return numbers.reduce((result, x) => {
        let op = operators.shift();
        // console.log(result,x,op);
        return calc(result, x, op);
    });


}

function calc(num1, num2, op) {
    if (op == "+") {
        return num1 + num2;
    } else if (op == "-") {
        return num1 - num2;
    } else if (op == "*") {
        return num1 * num2;
    } else if (op == "/") {
        return num1 / num2;
    }
}

