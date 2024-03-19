let shoppingCart = [];

function addToCart(name, price, quantity) {
  if (!name) {
    throw new Error("Product name is required.");
  }
  if (typeof price !== "number" || price <= 0) {
    throw new Error("Invalid product price.");
  }
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Invalid quantity.");
  }
  shoppingCart.push({ name, price, quantity });
}

function checkout() {
  if (shoppingCart.length === 0) {
    throw new Error("Cart is empty. Add items before checkout.");
  }
}

try {
  addToCart("Laptop", 1200, 2);
  addToCart("Just", 30, 1);
  addToCart("Mouse", -15, 3);
  addToCart("Keyboard", 50, "abc");
  checkout();
} catch (error) {
  console.error(error.message);
}
