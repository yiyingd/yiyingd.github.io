
var cartItems = JSON.parse(localStorage.getItem("userItems"))
if (cartItems==undefined) {
	localStorage.setItem("cartItems", "{}")
	cartItems = {}
}

var totalPrice = 0
var totalTax = 0
var finalTotal = 0

for (var key in cartItems) {
	item = cartItems[key]

	totalPrice += item.qty*19.99
	totalTax += 0.07*item.qty*19.99

	// var container = document.getElementById("cardContainer")
	document.getElementById("cardContainer").innerHTML += `<div class="card">
                    <div class = "row">
                        <div class = "col-2">                            
                            <div class = "picture"> <!-- jump to another page -->
                                <a href = "detail.html"><img src="css/product1.png" alt="Georgina Stems Duvet Set"></a>
                            </div>
                        </div>

                        <div class = "col-7">
                            <h4>Georgina Stems Duvet Set</h4>
                            <h5>Size: ${item.size}</h5>
                            <h5>Color: ${item.color}</h5>
                        </div>

                        <div class = "col-3">
                            <div class = "option">
                                <div class = "row">
                                    <span>
                                        <div id = "edit"><p>Edit</p></div>
                                        <div id = "remove"><p>Remove</p></div>
                                    </span>
                                </div>
                            </div>
                            <br>
                            <div class = "bottom_option">
                                <span class = "price"> $39.99</span>
                                <h5>Quantity: ${item.qty}</h5>
                            </div>

                           
                        </div>

                    </div> 
                </div>`
		
	
}

finalTotal = totalPrice + totalTax +2.99
document.getElementById("itemPrice").innerHTML = '$'+ totalPrice.toFixed(2).toString()
document.getElementById("itemTax").innerHTML = '$'+ totalTax.toFixed(2).toString()
document.getElementById("total").innerHTML = '$'+ finalTotal.toFixed(2).toString()


// Removing items from cart

function removeItem (id) {
	toRemove = document.getElementById(id).parentNode
	toRemove.parentNode.removeChild(toRemove)

	idNum = id.split("exitButton")[1]
	item = cartItems[idNum]

	totalPrice -= item.qty*19.99
	totalTax -= 0.07*item.qty*19.99
	finalTotal = totalPrice + totalTax +2.99

	document.getElementById("itemPrice").innerHTML = '$'+ Math.abs(totalPrice).toFixed(2).toString()
	document.getElementById("itemTax").innerHTML = '$'+ Math.abs(totalTax).toFixed(2).toString()
	document.getElementById("total").innerHTML = '$'+ Math.abs(finalTotal).toFixed(2).toString()

	delete cartItems[idNum]
	localStorage.removeItem("userItems")
	localStorage.setItem("userItems",JSON.stringify(cartItems));
}