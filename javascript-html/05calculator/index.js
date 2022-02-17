var screen = document.getElementById("screen");
var result = document.getElementById("result");
var container = document.getElementById("container");
var operations = document.getElementById("operations");
var run = document.getElementById("run");
var operationMap = {
    "+": sum,
    "-": res,
    "x": mult,
    "/": div
}

function handleInput (event) {
    var text = event.target.innerText;
    screen.value += text;
}

container.addEventListener("click", handleInput)
operations.addEventListener("click", handleInput)

run.addEventListener("click", function () {
    var value = screen.value;
    var operador;
    if (value.includes("+")){
        operador = "+";
    } else if (value.includes("-")){
        operador = "-";
    } else if (value.includes("x")){
        operador = "x";
    } else if (value.includes("/")){
        operador = "/";
    }
    console.log(value.split(operador));
    var nums = value.split(operador);
    var a = parseInt(nums[0]);
    var b = Number(nums[1]);
    var operation = operationMap[operador];
    var mathResult = operation(a,b);
    result.value = mathResult;
})

function sum(a,b) {
    return a + b;
}

function res(a,b) {
    return a - b;
}

function mult(a,b) {
    return a * b;
}

function div(a,b) {
    return a / b;
}
