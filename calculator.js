// Basic calculator built with Javascript

// operators
var oneButton = document.getElementById('one');
var twoButton = document.getElementById('two');
var threeButton = document.getElementById('three');
var fourButton = document.getElementById('four');
var fiveButton = document.getElementById('five');
var sixButton = document.getElementById('six');
var sevenButton = document.getElementById('seven');
var eightButton = document.getElementById('eight');
var nineButton = document.getElementById('nine');
var zeroButton = document.getElementById('zero');
// operands
var divideButton = document.getElementById('divide');
var multiplyButton = document.getElementById('multiply');
var subtractButton = document.getElementById('subtract');
var addButton = document.getElementById('add');
// other
var acButton = document.getElementById('ac');
var ceButton = document.getElementById('ce');
var decimalButton = document.getElementById('decimal');
var equalButton = document.getElementById('equal');
var outputBox = document.getElementById('textbox');
var historyBox = document.getElementById('history');

var val1 = null, val2 = null;

outputBox.value = "0";

// event listeners
oneButton.addEventListener('click', setNumber, false);
twoButton.addEventListener('click', setNumber, false);
threeButton.addEventListener('click', setNumber, false);
fourButton.addEventListener('click', setNumber, false);
fiveButton.addEventListener('click', setNumber, false);
sixButton.addEventListener('click', setNumber, false);
sevenButton.addEventListener('click', setNumber, false);
eightButton.addEventListener('click', setNumber, false);
nineButton.addEventListener('click', setNumber, false);
zeroButton.addEventListener('click', setNumber, false);
decimalButton.addEventListener('click', appendDecimal, false);
acButton.addEventListener('click', acClear, false);
divideButton.addEventListener('click', setOperand, false);
multiplyButton.addEventListener('click', setOperand, false);
subtractButton.addEventListener('click', setOperand, false);
addButton.addEventListener('click', setOperand, false);
equalButton.addEventListener('click', calculate, false);



function chain() {
	val2 = parseFloat(outputBox.value);
	var result = eval(val1 + historyBox.innerHTML + val2);
	outputBox.innerHTML = result;
	outputBox.value = result;
}
// temporary rough logic, clean up, possibly remove eval and make own function
function calculate() {
	val2 = parseFloat(outputBox.value);
	var result = eval(val1 + historyBox.innerHTML + val2);
	outputBox.innerHTML = result;
	outputBox.value = result;
	historyBox.innerHTML = "";
	// fix chaining of calculate
}

function setOperand() { // fix to work for chaining
	historyBox.innerHTML = this.innerHTML;
	if(outputBox.value !== "0" && val1 === null) {
		val1 = parseFloat(outputBox.value);
		outputBox.innerHTML = "";
		outputBox.value = "";
	}
	else if(val1 !== null) {
		console.log('chaining');
		chain(); // needs chain function
	}
};

function acClear() {
	if(outputBox.value !== "0") {
		outputBox.innerHTML = "0";
		outputBox.value = "0";
		val1 = null;
		val2 = null;
		historyBox.innerHTML = "";
	}
};

function setNumber(){
	return appendNumber(this.innerHTML);
};

function appendDecimal() {
	if(outputBox.value.indexOf(".") < 0) {
		if(outputBox.value === "0") {
			outputBox.innerHTML = "0.";
			outputBox.value = "0.";
		}
		else {
			outputBox.innerHTML += ".";
			outputBox.value += ".";
		}
	}
};

function appendNumber(value) {
	if(outputBox.value === "0") {
		if(outputBox.value.length < 10) {
			outputBox.innerHTML = value;
			outputBox.value = value;
		}
	}
	else {
		if(outputBox.value.length < 10) {
				outputBox.innerHTML += value;
					outputBox.value += value;
		}	
	}
};


// callback for calculate example below
// function calculate(num1, num2, callback){
// 	return callback(num1, num2);
// }

// function add(a, b){
// 	return a + b;
// }