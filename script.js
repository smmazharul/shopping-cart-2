document.getElementById("add_button").addEventListener("click", checkInput);
document.querySelectorAll(".remove").forEach(removebtn => removebtn.addEventListener("click", removeProduct));
document.querySelectorAll(".quantity").forEach(qty => qty.addEventListener("change", changeSubtotal));
total();

// Check if input is empty
function checkInput(){
	let nameProduct = document.getElementById("name_product");
	let priceProduct = document.getElementById("price_product");
	if (nameProduct.value != "" && priceProduct.value != "") {
		addProduct();
		total();
	}
}

// Add a product
function addProduct(){
	let nameProduct = document.getElementById("name_product");
	let priceProduct = document.getElementById("price_product");

	let tbody = document.getElementById("all_products");
	let tr = tbody.insertRow();
	let td1 = tr.insertCell(0);
	let td2 = tr.insertCell(1);
	let td3 = tr.insertCell(2);
	let td4 = tr.insertCell(3);
	let td5 = tr.insertCell(4);

	td1.innerHTML = nameProduct.value;
	td2.innerHTML = priceProduct.value;
	td3.innerHTML = '<input type="number" class="quantity" value="1" min="0">';
	td4.innerHTML = priceProduct.value;
	td5.innerHTML = '<button type="button" class="remove">Remove</i></button>';

	td3.addEventListener("change", changeSubtotal);
	td5.addEventListener("click", removeProduct);

	nameProduct.value = "";
	priceProduct.value = "";
}

// Change subtotal
function changeSubtotal(element) {
	let price = this.previousElementSibling.innerHTML;
	let quantity = element.target.value; 
	let subtotal = parseFloat(price * quantity).toFixed(2);
	this.nextElementSibling.innerHTML = subtotal;
	total();
}

// Remove a product
function removeProduct() {
	this.parentElement.parentElement.removeChild(this.parentElement);
	total();
}

// Sum total
function total(){
	let totalDisplay = document.getElementById("total_display");
	let sum = 0;
	let tbody = document.getElementById("all_products");
	for (let i = 0; i < tbody.rows.length; i++) {
		sum = sum + parseFloat(tbody.rows[i].cells[3].innerHTML);
	}
	let total = sum.toFixed(2);
	totalDisplay.innerHTML = total + " euros";
}
