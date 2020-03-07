var color = "";
var size = "";
var userItems = JSON.parse(localStorage.getItem("userItems"));
var idCounter = JSON.parse(localStorage.getItem("idCounter"));
localStorage.clear()
console.log(userItems);
document.getElementById("counter").innerHTML = Object.keys(userItems).length;
if (userItems == undefined) {
	localStorage.setItem("userItems", "{}")
	userItems = {}}
if (idCounter == undefined) {
	localStorage.setItem("idCounter", 0)
	idCounter = 0}

function color_select1() {
	if (color == "gray") {
		document.getElementById(color).classList.remove("selectedColor");
		// Adding text to the HTML page that indicates the color selected
		color = "";
		document.getElementById("selecColorTxt").innerHTML = `Color:`;}
		// if selected is any other color, remove it and add it to the color that is clicked on
		else {
		if (color != "") {
			document.getElementById(color).classList.remove("selectedColor");
		}
		color = "gray";
		document.getElementById(color).classList.add("selectedColor");}
}

function color_select2() {

	if (color == "orange") {
		document.getElementById(color).classList.remove("selectedColor");
		color = "";
		document.getElementById("selecColorTxt").innerHTML = `Color:`;
	} else {
		if (color != "") {
			document.getElementById(color).classList.remove("selectedColor");
		}
		color = "orange";
		document.getElementById(color).classList.add("selectedColor");
		
	}
}

function size_selector1() {
	// If the size is already tiny, clicking it again will remove the border 
	if (size == "Twin") {
		document.getElementById(size).classList.remove("selectedSize");
		size = ""
		// Adding text to the HTML page that indicates the size selected
		document.getElementById("selecSizeTxt").innerHTML = `Size:`;
	} else {
		// if selected is any other size, remove the background color and add it to the size that is clicked on
		if (size != "") {
			document.getElementById(size).classList.remove("selectedSize");
		}
		size = "Twin"
		document.getElementById(size).classList.add("selectedSize");
		document.getElementById("selecSizeTxt").innerHTML = `Size: ${size}`;
	}
}

// Same process for these size selectors, one for each size option
function size_selector2() {
	if (size == "Queen") {
		document.getElementById(size).classList.remove("selectedSize");
		size = ""
		document.getElementById("selecSizeTxt").innerHTML = `Size:`;
	} else {
		if (size != "") {
			document.getElementById(size).classList.remove("selectedSize");
		}
		size = "Queen"
		document.getElementById(size).classList.add("selectedSize");
		document.getElementById("selecSizeTxt").innerHTML = `Size: ${size}`;
	}
}

function addtoCart() {
	userItems[idCounter] = {color: color,size: size, 
		qty: document.getElementById("quantInput").value};
	idCounter++;
	localStorage.removeItem("idCounter");
	localStorage.setItem("idCounter", idCounter);
	localStorage.removeItem("userItems");
	localStorage.setItem("userItems",JSON.stringify(userItems));
	document.getElementById("counter").innerHTML = Object.keys(userItems).length;
	console.log(userItems);
}