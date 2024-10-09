// Función para añadir un producto al carrito
export function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para obtener los productos del carrito
export function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Función para eliminar un producto del carrito
export function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para vaciar el carrito
export function clearCart() {
  localStorage.removeItem('cart');
}