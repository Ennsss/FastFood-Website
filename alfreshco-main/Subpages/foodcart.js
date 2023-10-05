function addToCart(itemId, quantity) {
	// Get the current cart from local storage
	let cart = JSON.parse(localStorage.getItem('cart')) || {};
  
	// Check if the item is already in the cart
	if (cart[itemId]) {
	  // If it is, update the quantity
	  cart[itemId] += quantity;
	} else {
	  // If not, add it to the cart with the specified quantity
	  cart[itemId] = quantity;
	}
  
	// Save the updated cart back to local storage
	localStorage.setItem('cart', JSON.stringify(cart));
  }
  