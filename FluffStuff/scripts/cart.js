var priceSum = 0
var taxSum = 0
var finalTotal = 0
var itemsCart = JSON.parse(localStorage.getItem("itemSelect"))


if (itemsCart==undefined) {
	localStorage.setItem("itemsCart", "{}")
	itemsCart = {}
}

for (var key in itemsCart) {
	item = itemsCart[key]
	priceSum += item.qty*39.99
	taxSum += 0.07*item.qty*39.99
	//error with delete function...trying to fix it next time
	document.getElementById("cardContainer").innerHTML += `
					<div class="card">
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
                                        <div onclick="removeItem(this.id)" id = "remove"><p>Remove</p></div>
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

finalTotal = priceSum + taxSum +2.99
document.getElementById("itemPrice").innerHTML = '$'+ priceSum.toFixed(2).toString()
document.getElementById("itemTax").innerHTML = '$'+ taxSum.toFixed(2).toString()
document.getElementById("total").innerHTML = '$'+ finalTotal.toFixed(2).toString()



function removeItem (id) {
	toRemove = document.getElementById(id).parentNode.parentNode
	toRemove.parentNode.removeChild(toRemove)
	deleteID = id.split("exitButton")[1]
	item = itemsCart[deleteID]

	priceSum -= item.qty*39.99
	taxSum -= 0.07*item.qty*39.99
	finalTotal = priceSum + taxSum +2.99
	//calculate price 
	document.getElementById("itemPrice").innerHTML = '$'+ Math.abs(priceSum).toFixed(2).toString()
	document.getElementById("itemTax").innerHTML = '$'+ Math.abs(taxSum).toFixed(2).toString()
	document.getElementById("total").innerHTML = '$'+ Math.abs(finalTotal).toFixed(2).toString()
	delete itemsCart[deleteID]
	localStorage.removeItem("userItems")
	localStorage.setItem("userItems",JSON.stringify(itemsCart));}