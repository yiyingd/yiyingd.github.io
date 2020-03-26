var color = "";
var size = "";
var itemSelect = JSON.parse(localStorage.getItem("itemSelect"));
var num = JSON.parse(localStorage.getItem("num"));

if (itemSelect == undefined) {
	localStorage.setItem("itemSelect", "{}")
	itemSelect = {}}
if (num == undefined) {
	localStorage.setItem("num", 0)
	num = 0}


console.log(itemSelect)


document.getElementById("counter").innerHTML = Object.keys(itemSelect).length;
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
	if (size == "Twin") {
		document.getElementById(size).classList.remove("selectedSize");
		size = ""
		document.getElementById("selecSizeTxt").innerHTML = `Size:`;
	} else {
		if (size != "") {
			document.getElementById(size).classList.remove("selectedSize");
		}
		size = "Twin"
		document.getElementById(size).classList.add("selectedSize");
		document.getElementById("selecSizeTxt").innerHTML = `Size: ${size}`;
	}
}

// repeat for another option
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

localStorage.clear()

function addCart() {
	itemSelect[num] = {color: color,size: size, 
		qty: document.getElementById("quantInput").value};
	num++;
	localStorage.removeItem("num");
	localStorage.setItem("num", num);
	localStorage.removeItem("itemSelect");
	localStorage.setItem("itemSelect",JSON.stringify(itemSelect));
	document.getElementById("counter").innerHTML = Object.keys(itemSelect).length;
	console.log(itemSelect);
}