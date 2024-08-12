import { Products } from "../entities/product.entity.js";
async function getAllProducts() {
  return (await Products.scan.go()).data;
}
async function createProduct(addProduct) {
  await Products.create(addProduct).go();
}
async function getProductById(id) {
  return await Products.get({ ProductId: id }).go();
}

async function deleteProductById(id) {
  await Products.delete({ ProductId: id }).go();
}
async function updateProductById(existingData, updatedata) {
  return await Products.put({
    ...existingData.data,
    ...updatedata,
  }).go();
}

export {
  getAllProducts,
  createProduct,
  updateProductById,
  getProductById,
  deleteProductById,
};
