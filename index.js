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
  return {
    productId: productId,
    name: name,
    price: price,
    quantity: quantity,
  };
}
app.get('/cart/add', (req, res) => {
  let productId = parseFloat(req.query.productId);
  let name = req.query.name;
  let price = parseFloat(req.query.price);
  let quantity = parseFloat(req.query.quantity);
  let result = addToCart(cart, productId, name, price, quantity);
  cart.push(result);
  res.json({ cart: cart });
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
  let productId = parseFloat(req.query.productId);
  let quantity = parseFloat(req.query.quantity);
  let result = updateCart(cart, productId, quantity);
  res.json({ cart: cart });
});

//.............................................
function deleteCart(ele, productId) {
  return ele.productId != productId;
}

app.get('/cart/delete', (req, res) => {
  let productId = parseFloat(req.query.productId);
  let newCart = cart.filter((ele) => deleteCart(ele, productId));
  res.json({ cart: newCart });
});

app.get('/cart', (req, res) => {
  res.json({ cartItems: cart });
});

app.get('/cart/total-quantity', (req, res) => {
  let totalQuantity = 0;
  for (let i = 0; i < cart.length; i++) {
    totalQuantity = totalQuantity + cart[i].quantity;
  }
  res.json({ totalQuantity: totalQuantity });
});

app.get('/cart/total-price', (req, res) => {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price * cart[i].quantity;
  }
  res.json({ totalPrice: totalPrice });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
