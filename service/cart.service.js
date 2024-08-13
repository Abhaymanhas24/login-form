import { Cart } from "../entities/cart.entity.js";

async function getAllCartItem() {
  return (await Cart.scan.go()).data;
}
async function createCartProduct(addProduct) {
  await Cart.create(addProduct).go();
}
async function getProductById(id) {
  return await Cart.get({ userId: id }).go();
}

async function deleteFromCartById(id) {
  await cart.delete({ userId: id }).go();
}
export {
  getAllCartItem,
  createCartProduct,
  getProductById,
  deleteFromCartById,
};
