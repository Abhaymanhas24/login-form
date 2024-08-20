import { Cart } from "../entities/cart.entity.js";

async function getAllCartItem() {
  return (await Cart.scan.go()).data;
}
async function createCartProduct(addProduct) {
  await Cart.create(addProduct).go();
}
async function getUserIdById(Id) {
  return await Cart.get({ userId: Id }).go();
}
async function updateCartById(existingData, updatedata) {
  return await Cart.put({
    ...existingData.data,
    ...updatedata,
  }).go();
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
