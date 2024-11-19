// Importing module

//** */
// // import {
// //   addToCart,
// //   totalPrice as price,
// //   totalQuantity as tq,
// // } from './shoppingCart.js';
// // ('./shoppingCart.js');

// // import * as ShoppingCart from './shoppingCart.js';
// import add, { cart } from './shoppingCart.js';

// console.log('Importing module');

// // addToCart('bread', 5);

// add('bread', 5);
// add('pizza', 2);
// add('apples', 4);

// // console.log(cart);
// // console.log(ShoppingCart.totalPrice);
// // console.log(ShoppingCart.tq);

// console.log(cart);

// console.log('Start fetching');

// console.log(data);
// console.log('Something else');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = await getLastPost();
// console.log(lastPost);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} was added to cart! ( Shipping cost is ${shippingCost} )`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} was ordered to cart! `);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);

// console.log(ShoppingCart2);

// //Export
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} was added to cart! ( Shipping cost is ${shippingCost} )`
//   );
// };

// //Import
// const {addToCart} = require('./shoppingCart.js')

import cloneDeep from '/node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
