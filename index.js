var show_operator;
var show_result;

function operand(val) {
    document.getElementById("result").innerText += val;
}

function operator(val) {
    show_operator = document.getElementById("result").innerText;
    document.getElementById("result").innerText += val;
}

function clr() {
    document.getElementById("result").innerText = "  ";
}

function equal() {
    show_result = eval(document.getElementById("result").innerText).toFixed(2);
    console.log(show_result)
    document.getElementById("result").innerText = show_result;
}