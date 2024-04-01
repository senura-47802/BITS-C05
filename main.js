function backspace() {
	let display = document.getElementById("display");
	display.value = display.value.slice(0, -1);
}

function calculate() {
	let display = document.getElementById("display");
	let expression = display.value;
	let result;

	try {
		result = math.evaluate(expression);
		display.value = result;
	}
     catch (error) {
        alert("Please check if you added  ')-closing bracket'  for get square root of the number or if you used wrong mathematic technics");
	}
}

function squareRoot() {
	let display = document.getElementById("display");
	display.value += "sqrt(";
}
function power() {
	let display = document.getElementById("display");
	display.value += "^";
}

