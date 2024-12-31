const express = require('express');
const app = express();
const port = 3010;
const cors = require('cors');

app.use(cors());
app.use(express.json());

let cart = [
  { productId: 1, name: 'Laptop', price: 50000, quantity: 1 },
  { productId: 2, name: 'Mobile', price: 20000, quantity: 2 },
];

function addToCart(cart, productId, name, price, quantity) {
  const existingProductIndex = cart.findIndex(item => item.productId === productId);
  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += quantity;  // Increment quantity if product exists
  } else {
    cart.push({ productId, name, price, quantity });
  }
  return cart;
}

app.get('/cart/add', (req, res) => {
  let productId = parseInt(req.query.productId, 10);
  let name = req.query.name;
  let price = parseFloat(req.query.price);
  let quantity = parseInt(req.query.quantity, 10);

  if (isNaN(productId) || isNaN(price) || isNaN(quantity) || quantity <= 0) {
    return res.status(400).json({ error: 'Invalid product details' });
  }

  cart = addToCart(cart, productId, name, price, quantity);
  res.json({ cartItems: cart });
});

function updateCart(cart, productId, quantity) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity = quantity;
      break;
    }
  }
  return cart;
}

app.get('/cart/edit', (req, res) => {
  let productId = parseInt(req.query.productId, 10);
  let quantity = parseInt(req.query.quantity, 10);
  
  if (isNaN(quantity) || quantity <= 0) {
    return res.status(400).json({ error: 'Invalid quantity' });
  }

  cart = updateCart(cart, productId, quantity);
  res.json({ cartItems: cart });
});

app.get('/cart/delete', (req, res) => {
  let productId = parseInt(req.query.productId, 10);
  cart = cart.filter(item => item.productId !== productId);
  res.json({ cartItems: cart });
});

app.get('/cart', (req, res) => {
  res.json({ cartItems: cart });
});

app.get('/cart/total-quantity', (req, res) => {
  let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  res.json({ totalQuantity });
});

app.get('/cart/total-price', (req, res) => {
  let totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  res.json({ totalPrice });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
