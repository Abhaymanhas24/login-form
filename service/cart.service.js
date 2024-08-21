import { Cart } from "../entities/cart.entity.js";
import { Products } from "../entities/product.entity.js";
import { getProductById } from "../service/product.service.js";
async function getAllCartItem() {
  return (await Cart.scan.go()).data;
}
async function createCartProduct(addProduct) {
  await Cart.put(addProduct).go();
}
async function getUserIdById(Id) {
  return await Cart.get({ userId: Id }).go();
}
// async function calculateTotalPrice(products) {
//   let totalPrice = 0;

//   for (const product of products) {
//     const productData = await getProductById(product.productId);

//     if (productData.data) {
//       totalPrice += productData.data.price * product.quantity;
//     }
//   }

//   return totalPrice;
// }
// async function updateCartById(existingCart, products) {
//   const updatedTotalPrice = await calculateTotalPrice(products);
//   const updatedCart = {
//     ...existingCart.data,
//     products: [...products],
//     totalPrice: updatedTotalPrice,
//   };

//   // Save the updated cart back to the database
//   return await Cart.put(updatedCart).go();
// }

async function deleteFromCartById(id) {
  await Cart.delete({ userId: id }).go();
}
export { getAllCartItem, createCartProduct, getUserIdById, deleteFromCartById };
