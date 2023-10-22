// Get the element from the DOM
const inputs = document.querySelectorAll('.panel input');
const  c = document.querySelector('#celcius');
const  f = document.querySelector('#farenheit');
const  k = document.querySelector('#kelvin');
const  r = document.querySelector('#reamur');

// loop through all input
inputs.forEach(input => {
    // add an input event on all inputs
    input.addEventListener("input", e => {
        /*get the id from the input the event place on*/
        const unit = e.target.id;
        /*get the value from the input the event takes place on*/
        const v = parseInt(e.target.value);
        /*if the input event takes place in the celcius input*/
        if(unit === "celcius"){
            // convert the value to others
            f.value = parseFloat((v * (9/5)) + 32).toFixed(4) * 1;
            k.value = parseFloat((v * (5/5)) + 273).toFixed(4) * 1;
            r.value = parseFloat(v * (4/5)).toFixed(4) * 1;
        }
        /*if the input event takes place in the farenheit input*/
        else if(unit === 'farenheit'){
            // convert the value to others
            c.value = parseFloat((v - 32) * (5/9)).toFixed(4) * 1;
            k.value = parseFloat((v - 32) * (5/9) + 273).toFixed(4) * 1;
            r.value = parseFloat((v - 32) * (4/9)).toFixed(4) * 1;
        }
        /*if the input event takes place in the kelvin input*/
        else if (unit === 'kelvin'){
            // convert the value to others
            c.value = parseFloat((v - 273) * (5/5)).toFixed(4) * 1;
            f.value = parseFloat((v - 273) * (9/5) + 32).toFixed(4) * 1;
            r.value = parseFloat((v - 273) * (4/5)).toFixed(4) * 1;
        }
        /*if the input event takes place in the reamur input*/
        else if (unit === 'reamur'){
            // convert the value to others
            c.value = parseFloat(v * (5/4)).toFixed(4) * 1;
            f.value = parseFloat((v * (9/4)) + 32).toFixed(4) * 1;
            k.value = parseFloat((v * (5/4)) + 273).toFixed(4) * 1;
        }
    })
})

// javaScript for calculator

numVal = document.getElementById("calculatorTotal").innerHTML;


function sec(numKlik) {
    numVal = document.getElementById("calculatorTotal").innerHTML;
    numVal = numVal + numKlik;
    document.getElementById("calculatorTotal").innerHTML = numVal;
}

function min() {
    numVal = document.getElementById("calculatorTotal").innerHTML;
    numVal = "-" + numVal;
    document.getElementById("calculatorTotal").innerHTML = numVal;
}

function perc() {
    numVal = document.getElementById("calculatorTotal").innerHTML;
    numVal = numVal * 1 / 100;
    document.getElementById("calculatorTotal").innerHTML = numVal;
}

function dot() {
    numVal = document.getElementById("calculatorTotal").innerHTML
    numVal = numVal + "."
    document.getElementById("calculatorTotal").innerHTML = numVal;
}

function resetCalculator() {
    reset = document.getElementById("calculatorTotal").innerHTML
    reset = "";
    document.getElementById("calculatorTotal").innerHTML = reset;
}

function mul() {
    numVal = document.getElementById("calculatorTotal").innerHTML
    numVal = numVal + "*"
    document.getElementById("calculatorTotal").innerHTML = numVal;
}

function div() {
    numVal = document.getElementById("calculatorTotal").innerHTML
    numVal = numVal + "/"
    document.getElementById("calculatorTotal").innerHTML = numVal;
}
function sub() {
    numVal = document.getElementById("calculatorTotal").innerHTML
    numVal = numVal + "-"
    document.getElementById("calculatorTotal").innerHTML = numVal;

}
function add() {
    numVal = document.getElementById("calculatorTotal").innerHTML
    numVal = numVal + "+"
    document.getElementById("calculatorTotal").innerHTML = numVal;

}

function yoxlama() {
    if (isNaN(eval(notice)) !== false) {
        alert("Syulit")
    }
}

function equ() {
    notice = document.getElementById("calculatorTotal").innerHTML
    yoxlama();
    document.getElementById("calculatorTotal").innerHTML = eval(notice)

}