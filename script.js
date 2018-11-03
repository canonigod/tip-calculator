// script.js

// Custom function
function calculateTip(){
	// Store the date of inputs
	let billAmount = document.getElementById('billAmount').value;
	let serviceQuality = document.getElementById('serviceQuality').value;
	let numPeople = document.getElementById('totalPeople').value;

	// Quick Validation
	if (billAmount === "" || serviceQuality == 0) {
		return window.alert("Please, enter some values to get this baby up and running.");
	} // this will prevent the function to continue

	// Check to see if this input is empty or less than or equal to 1
	if(numPeople === "" || numPeople <= 1) {
		numPeople = 1;

		document.getElementById('each').style.display = 'none';
	} else {
		document.getElementById('each').style.display = 'block';
	}

	// DO some math
	let total = (billAmount * serviceQuality / numPeople);
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);

	// Display the tip:
	document.getElementById('totalTip').style.display = 'block';
	document.getElementById('tip').innerHTML = total;
}

// Hide the tip amount on load
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

// clicking the button calls our custom function
document.getElementById('calculate').onclick = function() { calculateTip(); };
