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

function setOperand() {
	return console.log(this.innerHTML);
};

function acClear() {
	if(outputBox.value !== "0") {
		outputBox.innerHTML = "0";
		outputBox.value = "0";
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
function calculate(num1, num2, callback){
	return callback(num1, num2);
}

function add(a, b){
	return a + b;
}