//Exporting module

console.log('Exporting module');

const shippingCost = 10;
const cart = [];

// export const addToCart = ;

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq, cart };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to cart!`);
}
