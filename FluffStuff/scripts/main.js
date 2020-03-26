// Creating a color selector

// setting variables selected as empty string
var color = ""

function colorSelector1() {
	// If the color is already teal, clicking it again will remove the border 
	if (color == "Teal") {
		document.getElementById(color).classList.remove("selectedColor");
		// Adding text to the HTML page that indicates the color selected
		color = ""
		document.getElementById("selecColorTxt").innerHTML = `Color:`;
		// if selected is any other color, remove it and add it to the color that is clicked on
	} else {
		if (color != "") {
			document.getElementById(color).classList.remove("selectedColor");
		}
		color = "Teal"
		document.getElementById(color).classList.add("selectedColor");
		document.getElementById("selecColorTxt").innerHTML = `Color: ${color}`;
	}
}

// Same process for these color selectors, one for each color option
function colorSelector2() {
	if (color == "Yellow") {
		document.getElementById(color).classList.remove("selectedColor");
		color = ""
		document.getElementById("selecColorTxt").innerHTML = `Color:`;
	} else {
		if (color != "") {
			document.getElementById(color).classList.remove("selectedColor");
		}
		color = "Yellow"
		document.getElementById(color).classList.add("selectedColor");
		document.getElementById("selecColorTxt").innerHTML = `Color: ${color}`;
	}
}

// Same process for these color selectors, one for each color option
function colorSelector3() {
	if (color == "Orange") {
		document.getElementById(color).classList.remove("selectedColor");
		color = ""
		document.getElementById("selecColorTxt").innerHTML = `Color:`;
	} else {
		if (color != "") {
			document.getElementById(color).classList.remove("selectedColor");
		}
		color = "Orange"
		document.getElementById(color).classList.add("selectedColor");
		document.getElementById("selecColorTxt").innerHTML = `Color: ${color}`;
	}
}

// Same process for these color selectors, one for each color option
function colorSelector4() {
	if (color == "Magenta") {
		document.getElementById(color).classList.remove("selectedColor");
		color = ""
		document.getElementById("selecColorTxt").innerHTML = `Color:`;
	} else {
		if (color != "") {
			document.getElementById(color).classList.remove("selectedColor");
		}
		color = "Magenta"
		document.getElementById(color).classList.add("selectedColor");
		document.getElementById("selecColorTxt").innerHTML = `Color: ${color}`;
	}
}

// Size Selector
// setting variables selected as empty string

size = ""
function sizeSelector1() {
	// If the size is already tiny, clicking it again will remove the border 
	if (size == "Tiny") {
		document.getElementById(size).classList.remove("selectedSize");
		size = ""
		// Adding text to the HTML page that indicates the size selected
		document.getElementById("selecSizeTxt").innerHTML = `Size:`;
	} else {
		// if selected is any other size, remove the background color and add it to the size that is clicked on
		if (size != "") {
			document.getElementById(size).classList.remove("selectedSize");
		}
		size = "Tiny"
		document.getElementById(size).classList.add("selectedSize");
		document.getElementById("selecSizeTxt").innerHTML = `Size: ${size}`;
	}
}

// Same process for these size selectors, one for each size option
function sizeSelector2() {
	if (size == "Small") {
		document.getElementById(size).classList.remove("selectedSize");
		size = ""
		document.getElementById("selecSizeTxt").innerHTML = `Size:`;
	} else {
		if (size != "") {
			document.getElementById(size).classList.remove("selectedSize");
		}
		size = "Small"
		document.getElementById(size).classList.add("selectedSize");
		document.getElementById("selecSizeTxt").innerHTML = `Size: ${size}`;
	}
}

// Same process for these size selectors, one for each size option
function sizeSelector3() {
	if (size == "Medium") {
		document.getElementById(size).classList.remove("selectedSize");
		size = ""
		document.getElementById("selecSizeTxt").innerHTML = `Size:`;
	} else {
		if (size != "") {
			document.getElementById(size).classList.remove("selectedSize");
		}
		size = "Medium"
		document.getElementById(size).classList.add("selectedSize");
		document.getElementById("selecSizeTxt").innerHTML = `Size: ${size}`;
	}
}

// Same process for these size selectors, one for each size option
function sizeSelector4() {
	if (size == "Large") {
		document.getElementById(size).classList.remove("selectedSize");
		size = ""
		document.getElementById("selecSizeTxt").innerHTML = `Size:`;
	} else {
		if (size != "") {
			document.getElementById(size).classList.remove("selectedSize");
		}
		size = "Large"
		document.getElementById(size).classList.add("selectedSize");
		document.getElementById("selecSizeTxt").innerHTML = `Size: ${size}`;
	}
}
localStorage.clear()

var userItems = JSON.parse(localStorage.getItem("userItems"));
var idCounter = JSON.parse(localStorage.getItem("idCounter"));

if (userItems == undefined) {
	localStorage.setItem("userItems", "{}")
	userItems = {}
}

if (idCounter == undefined) {
	localStorage.setItem("idCounter", 0)
	idCounter = 0
}
console.log(userItems)
document.getElementById("counter").innerHTML = Object.keys(userItems).length;

// 
function addCart() {
	userItems[idCounter] = {
		color: color,
		size: size,
		qty: document.getElementById("quantInput").value
	};
	idCounter++;
	localStorage.removeItem("idCounter")
	localStorage.setItem("idCounter", idCounter)

	localStorage.removeItem("userItems")
	localStorage.setItem("userItems",JSON.stringify(userItems));
	document.getElementById("counter").innerHTML = Object.keys(userItems).length;
	console.log(userItems)
}
