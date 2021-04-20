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
    let canOperator = false;

    $(".btn-outline-secondary").on("click", function () {
        expression.val(expression.val() + this.textContent);
        canOperator = true;
    });

    $(".btn-dark").on("click", function () {
        if(canOperator){
            expression.val(expression.val() + this.textContent);
            canOperator = false;
        }
    });

    equal.on("click", () => {
        let value = expression.val();
        if (value !== "") {
            result.text(calculate(value));
            expression1.text(value+"=");
        }
        expression.val("");
        canOperator = false;
    });

    $("#clearBtn").on("click", function () {
        expression1.text("");
        expression.val("");
        result.text(0);
        canOperator = false;
    });

    //preventing from invalid input
    expression.on("change paste input", function () {
        let notAllowedChar = /[^0-9\-/*+.]/;
        let inputValue = $(this).val();
        while (notAllowedChar.test(inputValue)) {
            inputValue = inputValue.replace(notAllowedChar, '');
        }
        $(this).val(inputValue);
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

