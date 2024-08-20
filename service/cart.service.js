import { Cart } from "../entities/cart.entity.js";
import { Products } from "../entities/product.entity.js";

async function getAllCartItem() {
  return (await Cart.scan.go()).data;
}
async function createCartProduct(addProduct) {
  await Cart.create(addProduct).go();
}
async function getUserIdById(Id) {
  return await Cart.get({ userId: Id }).go();
}
async function updateCartById(existingCart, products) {
  const updatedCart = {
    ...existingCart.data,
    products: [...products],
    totalPrice: 0,
  };

  // Save the updated cart back to the database
  return await Cart.put(updatedCart).go();
}

async function deleteFromCartById(id) {
  await Cart.delete({ userId: id }).go();
}
export {
  getAllCartItem,
  createCartProduct,
  getUserIdById,
  deleteFromCartById,
  updateCartById,
};
